module.exports = {
  displayName: "home",
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
    "^@sentrei/organisms": "<rootDir>/../../components/organisms/src/index.ts",
    "^@sentrei/home/(.+)$": "<rootDir>/src/$1",
  },
  coverageDirectory: "../../coverage/apps/home",
};
