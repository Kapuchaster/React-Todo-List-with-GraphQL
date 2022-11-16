import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema",
  generates: {
    "src/__generated__/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
