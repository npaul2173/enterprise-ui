// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//     'module-resolver',
//     {
//       root: ['.'],
//       alias: {
//         // This has to be mirrored in tsconfig.json
//         '@components': './src/common/components',
//         '@common': './src/common',
//       },
//     },
//   ],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          // This has to be mirrored in tsconfig.json
          '@common': './src/common',
          '@screens': './src/screens',
          '@router': './src/router/*',
          '@components': './src/common/components*',
          '@theme': './src/common/theme*',
          '@style': './src/common/style*',
        },
      },
    ],
  ],
};
