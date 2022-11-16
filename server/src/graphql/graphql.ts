import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import path from "path";
import { Resolvers } from "../__generated__/resolvers-types";

export const typeDefs = loadSchemaSync(
  path.join(__dirname, "./schema/", "*.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

export const resolvers: Resolvers = {
  Query: {
    taskList: () => taskList,
  },
};
