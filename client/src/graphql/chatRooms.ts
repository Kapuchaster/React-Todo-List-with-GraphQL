import { gql } from "@apollo/client";

export const GET_CHAT_ROOM_LIST = gql`
  query GetChatRoomList {
    chatRoomList {
      id
      title
      description
    }
  }
`;

export const CHAT_ROOM_SUBSCRIPTION = gql`
  subscription ChatRoomSubscription {
    postCreated
  }
`;
