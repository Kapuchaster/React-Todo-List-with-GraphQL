import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { PubSub, withFilter } from "graphql-subscriptions";
import path from "path";
import chatRoomList from "./db/ChatRooms";
import { ChatRoom, Message } from "./__generated__/resolvers-types";

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
    chatRoomCreated: {
      subscribe: () => {
        //TODO What's the type of asyncInterator?
        return pubsub.asyncIterator<ChatRoom>("CHAT_ROOM_CREATED") as any;
      },
    },
    messageCreated: {
      subscribe: withFilter(
        () => {
          //TODO What's the type of asyncInterator?
          return pubsub.asyncIterator<Message & { roomId: string }>(
            "NEW_MESSAGE"
          ) as any;
        },
        (payload, variables) => {
          console.log("---", payload, variables);
          return true;
        }
      ),
    },
  },
  Query: {
    chatRoomList: () => chatRoomList,
  },
  Mutation: {
    createChatRoom: (_obj, args, _context, _info) => {
      const { title, description } = args.input;

      pubsub.publish("CHAT_ROOM_CREATED", {
        chatRoomCreated: {
          id: title,
          title,
          description,
          messages: [],
        },
      });

      return {
        id: title,
        title,
        description,
        messages: [],
      };
    },
    createMessage: (_obj, args, _context, _info) => {
      const { roomId, author, text } = args.input;
      const timestamp = Date.now().toString();
      const newMessage = {
        id: timestamp,
        author,
        text,
        timestamp: timestamp,
      };

      const roomIndex = chatRoomList.findIndex(
        (chatRoom) => chatRoom.id === roomId
      );
      chatRoomList[roomIndex].messages.push(newMessage);

      pubsub.publish("NEW_MESSAGE", {
        messageCreated: { ...newMessage, roomId },
      });

      return true;
    },
  },
};
