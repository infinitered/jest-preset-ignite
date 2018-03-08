// OVERVIEW
//
//   Converts JS into TS within a react-native project.
//
// PRIOR ART
//
//   Thanks to https://github.com/petester42/jest-preset-typescript-react-native.
//   This library pretty much outline how to make this work.
//
//   Unfortunately it's been abandoned.
//
//
// ----------------------------------------------------------------------------

// typescript compiler
const tsc = require("typescript")

// typescript configuration
const compilerOptions = {
  // We are able to target something higher because whatever we emit
  // will still be run through ye olde babel.
  target: "es6",

  // We are running this within node, so commonjs is our only option (for now!)
  module: "commonjs",

  // I believe that `react-native` is more for historical reasons. This works.
  jsx: "react",

  // This is not something we can escape at the moment unfortunately. Some libraries
  // (such as react-native-i18n, moment, validate.js) have their typings already using
  // the broken way.
  allowSyntheticDefaultImports: true,

  // Related to the option above, and new in TypeScript 2.7, this furthers support for the
  // broken way to import default modules.
  esModuleInterop: true,

  // Let's jam our sourcemaps directly into the code.  This allows line numbers for
  // both .ts and .tsx to work.
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
