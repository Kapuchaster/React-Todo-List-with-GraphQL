import { PubSub } from "graphql-subscriptions";
import chatRoomList from "../db/ChatRooms";
import { Message, MutationResolvers } from "../__generated__/resolvers-types";

const mutations = (pubsub: PubSub): MutationResolvers => ({
  createChatRoom: (_obj, args, _context, _info) => {
    const { title, description } = args.input;

    const newChatRoom = {
      id: title,
      title,
      description,
      messages: [],
      participants: [],
    };

    chatRoomList.push(newChatRoom);

    pubsub.publish("CHAT_ROOM_CREATED", {
      chatRoomCreated: newChatRoom,
    });

    return newChatRoom;
  },
  joinChatRoom: (_obj, args, context, _info) => {
    //TODO author name will come with token in context
    const { author, roomIdToJoin, currentRoomId } = args.input;
    const { userId } = context.authorization;

    // Remove user from an old room
    if (currentRoomId) {
      const roomToLeaveIndex = chatRoomList.findIndex(
        (chatRoom) => chatRoom.id === currentRoomId
      );

      const userIndexToRemove = chatRoomList[
        roomToLeaveIndex
      ].participants.findIndex((participant) => participant.id === userId);

      chatRoomList[roomToLeaveIndex].participants.splice(userIndexToRemove, 1);
    }

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
});

export default mutations;
