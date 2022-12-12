import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { PubSub, withFilter } from "graphql-subscriptions";
import path from "path";
import chatRoomList from "./db/ChatRooms";
import { ChatRoom, Message, Resolvers } from "./__generated__/resolvers-types";

export const typeDefs = loadSchemaSync(
  path.join(__dirname, "./schema/", "*.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const pubsub = new PubSub();

export const resolvers: Resolvers = {
  Subscription: {
    chatRoomCreated: {
      subscribe: () => {
        //TODO What's the type of asyncInterator?
        return pubsub.asyncIterator<ChatRoom>("CHAT_ROOM_CREATED") as any;
      },
    },
    messageCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator<Message & { roomId: string }>("NEW_MESSAGE"),
        (payload, _variables, context) => {
          const { roomId } = payload.messageCreated;
          const { userId } = context.authorization;

          const selectedRoomIndex = chatRoomList.findIndex(
            (chatRoom) => chatRoom.id === roomId
          );

          // if the subscribing user is in participants of the given room returns true and emit event
          return chatRoomList[selectedRoomIndex].participants.some(
            (participant) => participant.id === userId
          );
        }
      ) as any,
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
          participants: [],
        },
      });

      return {
        id: title,
        title,
        description,
        messages: [],
        participants: [],
      };
    },
    joinChatRoom: (_obj, args, context, _info) => {
      //TODO author name will come with token in context
      const { author, roomIdToJoin, currentRoomId } = args.input;
      const { userId } = context.authorization;

      // Remove user from an old room
      //

      // Add user to the new room
      const roomToJoinIndex = chatRoomList.findIndex(
        (chatRoom) => chatRoom.id === roomIdToJoin
      );
      chatRoomList[roomToJoinIndex].participants.push({
        id: userId,
        name: author,
      });
      return chatRoomList[roomToJoinIndex];
    },
    createMessage: (_obj, args, _context, _info) => {
      const { roomId, author, text } = args.input;
      const timestamp = Date.now().toString();
      const newMessage: Message = {
        id: timestamp,
        author,
        text,
        timestamp,
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
