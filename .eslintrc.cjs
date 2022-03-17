module.exports = {
  root: true,
  extends: "@dooboo/eslint-config-svelte",
  rules: {
    "@typescript-eslint/no-unsafe-call": "off",
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  ],
};
