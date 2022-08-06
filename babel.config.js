module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: "./src/components",
          screens: "./src/screens",
          types: "./src/types",
          utils: "./src/utils",
          assets: "./src/assets",
        },
      },
    ],
  ],
};
