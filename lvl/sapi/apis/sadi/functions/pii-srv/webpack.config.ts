import { readFileSync } from "fs";
import { resolve } from "path";
import { Configuration } from "webpack";
import { yamlParse } from "yaml-cfn";

/* eslint-disable */
const { compilerOptions } = require("./tsconfig.json");
/* eslint-enable */

/** Webpack Config Variables */
const conf = {
  prodMode: process.env.NODE_ENV === "production",
  templatePath: "../../template.yaml",
};

/** Parsing tsconfig.json paths to resolve aliases */
const tsPaths = Object.keys(compilerOptions.paths).reduce(
  (paths, path) =>
    Object.assign(paths, {
      [`${path}`]: resolve(__dirname, compilerOptions.paths[path][0]),
    }),
  {}
);

/** Interface for AWS SAM Function */
interface ISamFunction {
  Type: string;
  Properties: {
    AssumeRolePolicyDocument?: JSON;
    AutoPublishAlias?: string;
    AutoPublishCodeSha256?: string;
    CodeUri?: string;
    Description?: string;
    Environment?: {
      Variables: {
        [key: string]: string;
      };
    };
    Events?: EventSource;
    FunctionName?: string;
    Handler: string;
    Layers?: { [Ref: string]: string }[];
    Runtime: string;
    Timeout?: number;
    Tracing?: string;
    VersionDescription?: string;
  };
}

/** Parsing template.yaml file for function dir locations */
const { Resources } = yamlParse(readFileSync(conf.templatePath, "utf-8"));
const entries = Object.values<ISamFunction>(Resources)
  .filter(
    (resource: ISamFunction) => resource.Type === "AWS::Serverless::Function"
  )
  .filter(
    (resource: ISamFunction) =>
      resource.Properties.Runtime &&
      resource.Properties.Runtime.startsWith("nodejs")
  )
  .map((resource: ISamFunction) => ({
    filename: resource.Properties.Handler.split(".")[0],
    entryPath: resource.Properties.CodeUri.split("/").splice(3).join("/"),
  }))
  .reduce(
    (resources, resource) =>
      Object.assign(resources, {
        [`${resource.filename}`]: `./src/${resource.entryPath}${resource.filename}.ts`,
      }),
    {}
  );

/** Webpack Config */
const config: Configuration = {
  entry: entries,
  target: "node",
  mode: conf.prodMode ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: tsPaths,
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  plugins: [],
};

export default config;
