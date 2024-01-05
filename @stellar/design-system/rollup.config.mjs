import peerDepsExternal from "rollup-plugin-peer-deps-external";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcssPresetEnv from "postcss-preset-env";
import path from "path";

export default {
  input: "src/entry.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "build/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    esbuild(),
    postcss({
      extract: path.resolve("build/styles.min.css"),
      modules: false,
      autoModules: true,
      use: [
        [
          "sass",
          {
            includePaths: ["src"],
          },
        ],
      ],
      extensions: [".css, .scss"],
      plugins: [postcssPresetEnv()],
      minimize: true,
    }),
    url({
      destDir: "build/assets/",
      limit: 0,
      fileName: "[dirname][name][extname]",
      include: ["**/*.svg", "**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"],
    }),
    // options are in svgr.config.js
    svgr(),
  ],
};
