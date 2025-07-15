import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config = [
  // Main bundle
  defineConfig({
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Time units
  defineConfig({
    input: 'src/time.ts',
    output: [
      {
        file: 'dist/time.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/time.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Length units
  defineConfig({
    input: 'src/length.ts',
    output: [
      {
        file: 'dist/length.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/length.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Mass units
  defineConfig({
    input: 'src/mass.ts',
    output: [
      {
        file: 'dist/mass.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/mass.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Temperature units
  defineConfig({
    input: 'src/temperature.ts',
    output: [
      {
        file: 'dist/temperature.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/temperature.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Volume units
  defineConfig({
    input: 'src/volume.ts',
    output: [
      {
        file: 'dist/volume.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/volume.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Area units
  defineConfig({
    input: 'src/area.ts',
    output: [
      {
        file: 'dist/area.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/area.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Data units
  defineConfig({
    input: 'src/data.ts',
    output: [
      {
        file: 'dist/data.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/data.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [],
  }),
  // Type definitions
  defineConfig({
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/time.ts',
    output: [{ file: 'dist/time.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/length.ts',
    output: [{ file: 'dist/length.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/mass.ts',
    output: [{ file: 'dist/mass.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/temperature.ts',
    output: [{ file: 'dist/temperature.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/volume.ts',
    output: [{ file: 'dist/volume.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/area.ts',
    output: [{ file: 'dist/area.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
  defineConfig({
    input: 'src/data.ts',
    output: [{ file: 'dist/data.d.ts', format: 'es' }],
    plugins: [dts()],
  }),
];

export default config;