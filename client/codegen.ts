import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../common/schema/*.graphql",
  generates: {
    "src/__generated__/operations-types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
