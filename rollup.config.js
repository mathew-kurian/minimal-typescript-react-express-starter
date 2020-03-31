// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "app/index.tsx",
  output: {
    dir: "public/scripts",
    format: "cjs"
  },
  watch: {
    chokidar: false
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`
    }),
    typescript({ noEmitOnError: process.env.NODE_ENV === "production" }),
    commonjs({ extensions: [".js", ".ts", "jsx", ".tsx"] }),
    resolve(),
    json(),
    process.env.NODE_ENV === "production" && terser()
  ]
};
