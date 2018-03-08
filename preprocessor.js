// typescript compiler
const tsc = require("typescript")

// typescript configuration
const compilerOptions = {
  target: "es6",
  module: "commonjs",
  jsx: "react",
  allowSyntheticDefaultImports: true,
  esModuleInterop: true,
  inlineSourceMap: true,
}

/**
 * Converts TypeScript files to JavaScript.
 *
 * @param {string} The source code of the file.
 * @param {string} The path to the file we're transformation
 * @returns The transformed source code
 */
function process(src, path) {
  // we only convert .ts and .tsx files
  if (!path.endsWith(".ts") || !path.endsWith(".tsx")) {
    return src
  }

  // compile TS to JS
  var transpiled = tsc.transpileModule(src, { compilerOptions: compilerOptions, fileName: path })

  // send back the JS
  return transpiled.outputText
}

// make the pre-processor available to jest
module.exports = { process }
