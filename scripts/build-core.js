'use strict';
/**
 * build-core.js
 * Reads optimized SVGs, extracts viewBox + inner content, and emits
 * packages/core/dist/esm/index.js (and cjs + .d.ts files).
 *
 * Core exports: SvgIconData = { viewBox: string; content: string }
 * These are consumed at runtime by the React and Vue packages.
 */

const fs = require('fs/promises');
const path = require('path');
const camelcase = require('camelcase');

const OUT_DIR = path.resolve(__dirname, '../packages/core/dist');
const OPTIMIZED_DIR = path.resolve(__dirname, '../optimized');

/** Extract viewBox attribute and inner SVG content from an SVG string. */
function parseSvg(svg) {
  const viewBoxMatch = svg.match(/\bviewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const innerMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>\s*$/);
  const content = innerMatch ? innerMatch[1].trim() : '';
  return { viewBox, content };
}

function componentName(fileName) {
  return camelcase(fileName.replace(/\.svg$/, ''), { pascalCase: true }) + 'Icon';
}

async function build() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(path.join(OUT_DIR, 'esm'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'cjs'), { recursive: true });

  const files = (await fs.readdir(OPTIMIZED_DIR)).filter(f => f.endsWith('.svg')).sort();
  const icons = [];

  for (const file of files) {
    const svg = await fs.readFile(path.join(OPTIMIZED_DIR, file), 'utf-8');
    const { viewBox, content } = parseSvg(svg);
    const name = componentName(file);
    // Escape backticks and ${} in SVG content to safely embed in template literals
    const safeContent = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    icons.push({ name, viewBox, safeContent });
  }

  // ESM
  const esmLines = icons.map(
    ({ name, viewBox, safeContent }) =>
      `export const ${name} = { viewBox: ${JSON.stringify(viewBox)}, content: \`${safeContent}\` };`
  );
  await fs.writeFile(
    path.join(OUT_DIR, 'esm/index.js'),
    esmLines.join('\n') + '\n',
    'utf-8'
  );

  // CJS
  const cjsLines = icons.map(
    ({ name, viewBox, safeContent }) =>
      `module.exports.${name} = { viewBox: ${JSON.stringify(viewBox)}, content: \`${safeContent}\` };`
  );
  await fs.writeFile(
    path.join(OUT_DIR, 'cjs/index.js'),
    "'use strict';\n" + cjsLines.join('\n') + '\n',
    'utf-8'
  );

  // TypeScript declarations
  const dtsHeader = `export interface SvgIconData {\n  viewBox: string;\n  content: string;\n}\n`;
  const dtsLines = icons.map(({ name }) => `export declare const ${name}: SvgIconData;`);
  const dts = dtsHeader + dtsLines.join('\n') + '\n';
  await fs.writeFile(path.join(OUT_DIR, 'esm/index.d.ts'), dts, 'utf-8');
  await fs.writeFile(path.join(OUT_DIR, 'cjs/index.d.ts'), dts, 'utf-8');

  console.log(`✅ core: built ${icons.length} icons → packages/core/dist/`);
}

build().catch(err => { console.error(err); process.exit(1); });
