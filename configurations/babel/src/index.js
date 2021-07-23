module.exports = {
  plugins: [
    [
      "babel-plugin-react-generate-property",
      {
        customProperty: "data-cy",
      },
    ],
  ],
  presets: ["@babel/preset-react", "@nrwl/next/babel"],
};
