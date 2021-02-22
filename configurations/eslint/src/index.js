module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:editorconfig/all",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwind/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  ignorePatterns: ["**/.next/**", "**/eslint/**", "**/node_modules/**"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["editorconfig", "prettier", "@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": 1,
    "import/newline-after-import": 1,
    "import/order": [
      1,
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            group: "internal",
            pattern: "@sentrei/**",
            position: "after",
          },
        ],
      },
    ],
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: true,
      },
    ],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 1,
    "sort-keys": [1, "asc", { caseSensitive: true, minKeys: 2, natural: true }],
    "sort-vars": [1, { ignoreCase: true }],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: [
          "apps/*/tsconfig.json",
          "configurations/*/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
    },
    react: {
      version: "detect",
    },
  },
};
