# jest-preset-ignite

Converts JS into TS within a react-native project.

## Version Supported

Version 0.6 of this library supports:

| Library      | Version    |
| ------------ | ---------- |
| Jest         | 23.x       |
| React Native | 0.56, 0.57 |
| TypeScript   | 3.x        |
| Node JS      | 8+         |

Version 0.5 of this library supports the following configuration:

| Library      | Version          |
| ------------ | ---------------- |
| Jest         | 22.x             |
| React Native | 0.53, 0.54, 0.55 |
| TypeScript   | 2.7.x - 2.9.x    |
| Node JS      | 8+               |

It may work on other version, but I haven't tested this.

## Installing

In a project that contains the aforementioned libraries and versions, run this bad boy:

`yarn add jest-preset-ignite --dev`

Then open your `package.json` and change the `jest` section to use this preset.

```json
  "jest": {
    "preset": "jest-preset-ignite"
  }
```

You will also need a `test/setup.ts` file. This will be run first when the test
environment boots up. You can use this for any custom mocks or setup.

## TypeScript Compiler Settings

This will use it's own "`tsconfig.json`" and not the one from your project.

Here's a brief explanation on the compiler settings used. This WILL be on the test!

```js
{
  // We are able to target something higher because whatever we emit
  // will still be run through ye olde babel.
  target: "es2017",

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

  // Let TypeScript's compiler know we'll be needing source maps.
  sourceMap: true
}
```

## Prior Art

Thanks to https://github.com/petester42/jest-preset-typescript-react-native for showing me how this is done.

That project appears to be no longer active, so this picks up from there.

## License

MIT
