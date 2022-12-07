import { ChatRoom } from "../__generated__/resolvers-types";

const chatRoomList: ChatRoom[] = [
  {
    id: "1",
    title: "Town of cats",
    description: "Kate Chopin",
    messages: [
      {
        id: "1",
        author: "Micha",
        text: "welcome Micha",
        timestamp: Date.now().toString(),
      },
    ],
  },
  {
    id: "2",
    title: "City of Glass",
    description: "Paul Auster",
    messages: [
      {
        id: "1",
        author: "anna",
        text: "welcome anna",
        timestamp: Date.now().toString(),
      },
    ],
  },
];

export default chatRoomList;
