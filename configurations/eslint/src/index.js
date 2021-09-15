module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["**/.next/**", "**/eslint/**", "**/node_modules/**"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
    {
      files: ["*.spec.js", "*.spec.ts"],
      rules: {},
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
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "arrow-body-style": ["error", "always"],
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            group: "internal",
            pattern: "@sentrei/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "@/**",
            position: "after",
          },
        ],
      },
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/href-no-hash": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../"],
      },
    ],
    "no-restricted-exports": ["error", { restrictedNamedExports: ["default"] }],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
    "func-style": ["error", "expression", { allowArrowFunctions: false }],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: true,
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/no-contradicting-classname": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: [
          "apps/*/tsconfig.json",
          "components/*/tsconfig.json",
          "configurations/*/tsconfig.json",
          "e2e/*/tsconfig.e2e.json",
          "libs/*/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
    },
    react: {
      version: "detect",
    },
  },
};
