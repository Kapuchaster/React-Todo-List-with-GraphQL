import { MockedResponse } from "@apollo/client/testing";
import {
  JoinChatRoomDocument,
  JoinChatRoomInput,
  Mutation,
} from "../../__generated__/operations-types";

const getJoinChatRoomDocumentMock = (
  input: JoinChatRoomInput,
  output?: Mutation["joinChatRoom"]
): MockedResponse<Record<string, any>> => {
  return {
    request: {
      query: JoinChatRoomDocument,
      variables: {
        input,
      },
    },
    result: {
      data: {
        joinChatRoom: output,
      },
    },
  };
};

export default getJoinChatRoomDocumentMock;
