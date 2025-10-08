import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "next-env.d.ts",
      ".prettierrc",
      ".prettierignore",
    ],
  },
  
  // Next.js and TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  
  // Custom rules
  {
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",

      // React specific rules
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "warn",

      // General code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "curly": ["warn", "multi-line"],
      "no-unused-expressions": "warn",
      "no-duplicate-imports": "error",
      "prefer-template": "warn",
      "object-shorthand": "warn",
    },
  },
];

export default eslintConfig;
