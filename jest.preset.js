const nxPreset = require("@nrwl/jest/preset");

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.{spec,stories}.{ts,tsx}",
    "!**/dist/**",
  ],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@sentrei/atoms": "<rootDir>/../../components/atoms/src/index.ts",
    "^@sentrei/molecules": "<rootDir>/../../components/molecules/src/index.ts",
    "^@sentrei/organisms": "<rootDir>/../../components/organisms/src/index.ts",
    "^@sentrei/roots": "<rootDir>/../../components/roots/src/index.ts",
    "^@sentrei/screen": "<rootDir>/../../components/screens/src/index.ts",
    "^@sentrei/app/(.+)$": "<rootDir>/../../apps/app/src/$1",
    "^@sentrei/demo/(.+)$": "<rootDir>/../../apps/demo/src/$1",
    "^@sentrei/www-mosh-lol/(.+)$": "<rootDir>/../../apps/www-mosh-lol/src/$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
};
