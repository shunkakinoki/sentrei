module.exports = {
  ...require("@sentrei/prettier"),
  overrides: [
    {
      files: "apps/prisma/zod/**",
      options: {
        embeddedLanguageFormatting: "off",
      },
    },
  ],
};
