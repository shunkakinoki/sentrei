module.exports = {
  ...require("@sentrei/prettier"),
  overrides: [
    {
      files: "apps/app/prisma/zod/**",
      options: {
        embeddedLanguageFormatting: "off",
      },
    },
  ],
};
