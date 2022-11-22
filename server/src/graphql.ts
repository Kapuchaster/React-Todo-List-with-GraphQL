import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { PubSub } from "graphql-subscriptions";
import path from "path";
import chatRoomList from "./db/ChatRooms";
import { Resolvers } from "./__generated__/resolvers-types";

export const typeDefs = loadSchemaSync(
  path.join(__dirname, "./schema/", "*.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const pubsub = new PubSub();

// export const resolvers: Resolvers = {
export const resolvers = {
  Subscription: {
    postCreated: {
      subscribe: () => {
        console.log("pubsub");
        return pubsub.asyncIterator<string>("POST_CREATED");
      },
    },
  },
  Query: {
    chatRoomList: () => chatRoomList,
  },
};

let x = 1;
console.log("000init");

setInterval(() => {
  x++;
  console.log("incr", x);

  pubsub.publish("POST_CREATED", {
    postCreated: `testPubSub_${x}}`,
  });
}, 2000);
