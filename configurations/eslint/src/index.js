module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
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
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
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
      files: ["*.sol"],
      rules: {},
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
    "@typescript-eslint/consistent-type-imports": "error",
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
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../"],
      },
    ],
    "no-restricted-exports": ["error", { restrictedNamedExports: ["default"] }],
    "no-unused-vars": "warn",
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
        project: ["tsconfig.json"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
