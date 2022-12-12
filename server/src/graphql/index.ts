import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { PubSub } from "graphql-subscriptions";
import path from "path";
import { Resolvers } from "../__generated__/resolvers-types";
import mutations from "./mutations";
import queries from "./queries";
import subscriptions from "./subscriptions";

export const typeDefs = loadSchemaSync(
  path.join(__dirname, "../schema/", "*.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const pubsub = new PubSub();

export const resolvers: Resolvers = {
  Subscription: subscriptions(pubsub),
  Query: queries,
  Mutation: mutations(pubsub),
};
