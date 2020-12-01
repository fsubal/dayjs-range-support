import { Config } from "bili";
import typescript from "rollup-plugin-typescript2";

const config: Config = {
  input: "src/index.ts",
  plugins: {
    typescript2: typescript(),
  },
  output: {
    target: "browser",
    format: ["cjs", "esm"],
  },
};

export default config;
