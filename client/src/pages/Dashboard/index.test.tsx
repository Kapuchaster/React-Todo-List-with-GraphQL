import "@testing-library/jest-dom";

import { MockedProvider as ApolloProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { WithModalContext } from "../../HOC/WithModal";

import { ChakraProvider } from "@chakra-ui/react";
import Dashboard, { Props } from "./index";

const renderComponent = ({ chatRoomList }: Props) => {
  return render(
    <div id="root">
      <ApolloProvider mocks={[]} addTypename={false}>
        <ChakraProvider>
          <WithModalContext>
            <Dashboard chatRoomList={chatRoomList} />
          </WithModalContext>
        </ChakraProvider>
      </ApolloProvider>
    </div>
  );
};

describe("Dashboard renders correctly", () => {
  it("Should not display chat rooms", () => {
    renderComponent({ chatRoomList: [] });

    expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
    expect(screen.getByText("ChatRoomsPanel")).toBeDefined();
    expect(screen.getByText("ADD")).toBeDefined();
  });

  it("Should display chat rooms", () => {
    renderComponent({
      chatRoomList: [
        {
          id: "roomId_1",
          title: "roomTitle_1",
          messages: [],
          description: "roomDescription_1",
          participants: [{ id: "p_1", name: "partName_1" }],
        },
        {
          id: "roomId_2",
          title: "roomTitle_2",
          messages: [],
          description: "roomDescription_2",
          participants: [{ id: "p_2", name: "partName_2" }],
        },
      ],
    });

    expect(screen.getByText("roomTitle_1")).toBeDefined();
    expect(screen.getByText("roomTitle_2")).toBeDefined();
  });
});

// it("Should display selected chat room", () => {
//   renderComponent({
//     chatRoomList: [
//       {
//         id: "",
//         title: "",
//         messages: [],
//         description: "",
//         participants: [{ id: "1", name: "n" }],
//       },
//     ],
//   });
//   const x = screen.getByText("Select or create a Chat Room");
//   expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
//   screen.debug(x);
// });
