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
    "^@sentrei/app-sentrei-com/(.+)$":
      "<rootDir>/../../apps/app-sentrei-com/src/$1",
    "^@sentrei/blog-sentrei-com/(.+)$":
      "<rootDir>/../../apps/blog-sentrei-com/src/$1",
    "^@sentrei/og-sentrei-com/(.+)$":
      "<rootDir>/../../apps/og-sentrei-com/src/$1",
    "^@sentrei/wiki-sentrei-com/(.+)$":
      "<rootDir>/../../apps/wiki-sentrei-com/src/$1",
    "^@sentrei/www-mosh-lol/(.+)$": "<rootDir>/../../apps/www-mosh-lol/src/$1",
    "^@sentrei/www-sentrei-com/(.+)$":
      "<rootDir>/../../apps/www-sentrei-com/src/$1",
    "^@sentrei/www-thisweekindaos-com/(.+)$":
      "<rootDir>/../../apps/www-thisweekindaos-com/src/$1",
    "^@sentrei/app-sentrei-com/public/(.+)$":
      "<rootDir>/../../apps/app-sentrei-com/public/$1",
    "^@sentrei/blog-sentrei-com/public/(.+)$":
      "<rootDir>/../../apps/blog-sentrei-com/public/$1",
    "^@sentrei/og-sentrei-com/public/(.+)$":
      "<rootDir>/../../apps/og-sentrei-com/public/$1",
    "^@sentrei/wiki-sentrei-com/public/(.+)$":
      "<rootDir>/../../apps/wiki-sentrei-com/public/$1",
    "^@sentrei/www-mosh-lol/public/(.+)$":
      "<rootDir>/../../apps/www-mosh-lol/public/$1",
    "^@sentrei/www-sentrei-com/public/(.+)$":
      "<rootDir>/../../apps/www-sentrei-com/public/$1",
    "^@sentrei/www-thisweekindaos-com/public/(.+)$":
      "<rootDir>/../../apps/www-thisweekindaos-com/public/$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
};
