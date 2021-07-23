module.exports = {
  displayName: "organisms",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@sentrei/atoms": "<rootDir>/../../components/atoms/src/index.ts",
    "^@sentrei/molecules": "<rootDir>/../../components/molecules/src/index.ts",
  },
  coverageDirectory: "../../coverage/components/organisms",
};
