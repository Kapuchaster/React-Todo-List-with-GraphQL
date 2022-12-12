import { PubSub, withFilter } from "graphql-subscriptions";
import chatRoomList from "../db/ChatRooms";
import {
  ChatRoom,
  Message,
  SubscriptionResolvers,
} from "../__generated__/resolvers-types";

const subscriptions = (pubsub: PubSub): SubscriptionResolvers => ({
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
});
export default subscriptions;
