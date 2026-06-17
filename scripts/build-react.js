'use strict';
/**
 * build-react.js
 * Generates packages/react/dist — React components that wrap core SVG data
 * via a createIcon() factory (React.forwardRef, dangerouslySetInnerHTML).
 *
 * Must be run AFTER build-core.js so packages/core/dist/esm/index.js exists.
 */

const fs = require('fs/promises');
const path = require('path');
const camelcase = require('camelcase');
const { minify } = require('terser');

const OUT_DIR = path.resolve(__dirname, '../packages/react/dist');
const OPTIMIZED_DIR = path.resolve(__dirname, '../optimized');

function componentName(fileName) {
  return camelcase(fileName.replace(/\.svg$/, ''), { pascalCase: true }) + 'Icon';
}

/** Inline createIcon factory — embedded once at the top of each output file. */
const CREATE_ICON_ESM = `
import React from 'react';
function createIcon(d) {
  var C = React.forwardRef(function(p, r) {
    var rest = Object.assign({}, p);
    delete rest.children;
    return React.createElement('svg', Object.assign({ ref: r, viewBox: d.viewBox, xmlns: 'http://www.w3.org/2000/svg' }, rest, { dangerouslySetInnerHTML: { __html: d.content } }));
  });
  return C;
}
`.trim();

const CREATE_ICON_CJS = `
'use strict';
var React = require('react');
function createIcon(d) {
  var C = React.forwardRef(function(p, r) {
    var rest = Object.assign({}, p);
    delete rest.children;
    return React.createElement('svg', Object.assign({ ref: r, viewBox: d.viewBox, xmlns: 'http://www.w3.org/2000/svg' }, rest, { dangerouslySetInnerHTML: { __html: d.content } }));
  });
  return C;
}
`.trim();

async function build() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(path.join(OUT_DIR, 'esm'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'cjs'), { recursive: true });

  const files = (await fs.readdir(OPTIMIZED_DIR)).filter(f => f.endsWith('.svg')).sort();
  const names = files.map(componentName);

  // --- ESM ---
  // Import all core data, then export createIcon-wrapped components
  const esmImports = names
    .map((name, i) => `import { ${name} as _d${i} } from '@iran-utils/iranian-banks-icons-core';`)
    .join('\n');
  const esmExports = names
    .map((name, i) => `export var ${name} = /*#__PURE__*/createIcon(_d${i});`)
    .join('\n');
  const esmSource = [CREATE_ICON_ESM, esmImports, esmExports].join('\n');
  const { code: esmMin } = await minify(esmSource, { module: true });
  await fs.writeFile(path.join(OUT_DIR, 'esm/index.js'), esmMin, 'utf-8');

  // --- CJS ---
  const cjsImports = `var _core = require('@iran-utils/iranian-banks-icons-core');`;
  const cjsExports = names
    .map(name => `module.exports.${name} = /*#__PURE__*/createIcon(_core.${name});`)
    .join('\n');
  const cjsSource = [CREATE_ICON_CJS, cjsImports, cjsExports].join('\n');
  const { code: cjsMin } = await minify(cjsSource);
  await fs.writeFile(path.join(OUT_DIR, 'cjs/index.js'), cjsMin, 'utf-8');

  // --- TypeScript declarations ---
  const dts = [
    `import * as React from 'react';`,
    `export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'children'> & React.RefAttributes<SVGSVGElement>;`,
    ...names.map(name => `export declare const ${name}: React.ForwardRefExoticComponent<IconProps>;`),
  ].join('\n') + '\n';
  await fs.writeFile(path.join(OUT_DIR, 'esm/index.d.ts'), dts, 'utf-8');
  await fs.writeFile(path.join(OUT_DIR, 'cjs/index.d.ts'), dts, 'utf-8');

  console.log(`✅ react: built ${names.length} components → packages/react/dist/`);
}

build().catch(err => { console.error(err); process.exit(1); });
