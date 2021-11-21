module.exports = {
  extends: "@sentrei",
  overrides: [
    {
      files: ["apps/app/prisma/zod/**"],
      rules: {
        "prettier/prettier": "off",
        "import/order": "off",
        "no-restricted-imports": "off",
        "no-unused-vars": "off",
      },
    },
  ],
};
