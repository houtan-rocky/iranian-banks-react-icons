'use strict';
/**
 * build-vue.js
 * Generates packages/vue/dist — Vue 3 components that wrap core SVG data
 * via a defineIconComponent() factory.
 *
 * Must be run AFTER build-core.js so packages/core/dist/esm/index.js exists.
 */

const fs = require('fs/promises');
const path = require('path');
const camelcase = require('camelcase');
const { minify } = require('terser');

const OUT_DIR = path.resolve(__dirname, '../packages/vue/dist');
const OPTIMIZED_DIR = path.resolve(__dirname, '../optimized');

function componentName(fileName) {
  return camelcase(fileName.replace(/\.svg$/, ''), { pascalCase: true }) + 'Icon';
}

/** defineIconComponent factory — embedded once at the top of each output file. */
const DEFINE_ICON_ESM = `
import { defineComponent, h } from 'vue';
function defineIconComponent(d, name) {
  return defineComponent({
    name: name,
    inheritAttrs: false,
    setup(_, ctx) {
      return function() {
        return h('svg', Object.assign({ viewBox: d.viewBox, xmlns: 'http://www.w3.org/2000/svg', innerHTML: d.content }, ctx.attrs));
      };
    }
  });
}
`.trim();

const DEFINE_ICON_CJS = `
'use strict';
var vue = require('vue');
function defineIconComponent(d, name) {
  return vue.defineComponent({
    name: name,
    inheritAttrs: false,
    setup(_, ctx) {
      return function() {
        return vue.h('svg', Object.assign({ viewBox: d.viewBox, xmlns: 'http://www.w3.org/2000/svg', innerHTML: d.content }, ctx.attrs));
      };
    }
  });
}
`.trim();

async function build() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(path.join(OUT_DIR, 'esm'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'cjs'), { recursive: true });

  const files = (await fs.readdir(OPTIMIZED_DIR)).filter(f => f.endsWith('.svg')).sort();
  const names = files.map(componentName);

  // --- ESM ---
  const esmImports = names
    .map((name, i) => `import { ${name} as _d${i} } from '@iran-utils/iranian-banks-icons-core';`)
    .join('\n');
  const esmExports = names
    .map((name, i) => `export var ${name} = /*#__PURE__*/defineIconComponent(_d${i}, '${name}');`)
    .join('\n');
  const esmSource = [DEFINE_ICON_ESM, esmImports, esmExports].join('\n');
  const { code: esmMin } = await minify(esmSource, { module: true });
  await fs.writeFile(path.join(OUT_DIR, 'esm/index.js'), esmMin, 'utf-8');

  // --- CJS ---
  const cjsImports = `var _core = require('@iran-utils/iranian-banks-icons-core');`;
  const cjsExports = names
    .map(name => `module.exports.${name} = /*#__PURE__*/defineIconComponent(_core.${name}, '${name}');`)
    .join('\n');
  const cjsSource = [DEFINE_ICON_CJS, cjsImports, cjsExports].join('\n');
  const { code: cjsMin } = await minify(cjsSource);
  await fs.writeFile(path.join(OUT_DIR, 'cjs/index.js'), cjsMin, 'utf-8');

  // --- TypeScript declarations ---
  const dts = [
    `import type { DefineComponent } from 'vue';`,
    `export type IconProps = {`,
    `  [key: string]: unknown;`,
    `};`,
    ...names.map(name => `export declare const ${name}: DefineComponent<IconProps>;`),
  ].join('\n') + '\n';
  const pkgRoot = path.resolve(__dirname, '../packages/vue');
  await fs.writeFile(path.join(pkgRoot, 'index.d.ts'), dts, 'utf-8');
  await fs.writeFile(path.join(OUT_DIR, 'esm/index.d.ts'), dts, 'utf-8');
  await fs.writeFile(path.join(OUT_DIR, 'cjs/index.d.ts'), dts, 'utf-8');

  console.log(`✅ vue: built ${names.length} components → packages/vue/dist/`);
}

build().catch(err => { console.error(err); process.exit(1); });
