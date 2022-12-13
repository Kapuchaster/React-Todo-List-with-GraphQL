import { ChatRoom } from "../__generated__/resolvers-types";

const chatRoomList: ChatRoom[] = [
  {
    id: "1",
    title: "Town of cats",
    description: "Kate Chopin",
    messages: [
      {
        id: "1",
        authorName: "Bot",
        text: "welcome in Town of cats",
        timestamp: Date.now().toString(),
      },
    ],
    participants: [],
  },
  {
    id: "2",
    title: "City of Glass",
    description: "Paul Auster",
    messages: [
      {
        id: "1",
        authorName: "Bot",
        text: "welcome in City of Glass",
        timestamp: Date.now().toString(),
      },
    ],
    participants: [],
  },
];

export default chatRoomList;
