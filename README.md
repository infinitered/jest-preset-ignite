# jest-preset-ignite

Converts JS into TS within a react-native project.

## Version Supported

Version 1.x of this library supports the following configuration.

| Library      | Version   |
| ------------ | --------- |
| Jest         | 22.4.x    |
| React Native | 0.53.x    |
| TypeScript   | 2.7.2     |
| Node JS      | 8.x & 9.x |

It may work on other version, but I haven't tested this.

## Installing

In a project that contains the aforementioned libraries and versions, run this bad boy:

`yarn add jest-preset-ignite --dev`

Then open your `package.json` and change the `jest` section to use this preset.

```json
  "jest": {
    "preset": "ignite"
  }
```

## PRIOR ART

Thanks to https://github.com/petester42/jest-preset-typescript-react-native for showing me how this is done.

That project appears to be no longer active, so this picks up from there.


## License

MIT

