// const path = require("path");

// module.exports = (storybookBaseConfig, configType) => {
//   storybookBaseConfig.resolve.alias = {
//     ...storybookBaseConfig.resolve.alias,
//     fs: path.resolve(__dirname, "fsMock.js"),
//   };

//   return storybookBaseConfig;
// };

// module.exports = {
//   entry: "./server",
//   output: {
//     path: __dirname,
//     filename: "bundle.js",
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: "node_modules",
//         loader: "babel",
//         query: { presets: ["es2015"] },
//       },
//     ],
//   },
//   target: "node",
// };

const path = require("path");

module.exports = async ({ config, mode }) => {
  config.node = { fs: "empty" };
  return config;
};
