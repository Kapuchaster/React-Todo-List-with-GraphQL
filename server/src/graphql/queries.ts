import chatRoomList from "../db/ChatRooms";
import { QueryResolvers } from "../__generated__/resolvers-types";

const queries: QueryResolvers = {
  chatRoomList: () => chatRoomList,
};

export default queries;
