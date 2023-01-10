import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor, within } from "../../test-utils";
import Dashboard, { Props } from "./index";

const __MOCKED_CHAT_ROOM_LIST__ = [
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
];

const renderComponent = ({ chatRoomList }: Props) => {
  return render(
    <div id="root">
      <Dashboard chatRoomList={chatRoomList} />
    </div>
  );
};

describe("Dashboard renders correctly", () => {
  it("Should display empty dashboard", () => {
    renderComponent({ chatRoomList: [] });

    // Checks if aside panels are rendered
    const chatRoomsAside = screen.getByTestId("aside-chat-rooms");
    const profileAside = screen.getByTestId("aside-profile");

    expect(
      within(chatRoomsAside).getByRole("heading", { name: "ChatRoomsPanel" })
    ).toBeInTheDocument();
    expect(
      within(chatRoomsAside).getByRole("button", { name: "ADD" })
    ).toBeInTheDocument();
    expect(
      within(profileAside).getByRole("heading", { name: "Profile" })
    ).toBeInTheDocument();
    expect(within(profileAside).getByLabelText("Username")).toBeInTheDocument();

    // Checks if main panel is rendered
    expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
  });

  it("Should display chat rooms", () => {
    renderComponent({
      chatRoomList: __MOCKED_CHAT_ROOM_LIST__,
    });

    expect(screen.getByText("roomTitle_1")).toBeDefined();
    expect(screen.getByText("roomTitle_2")).toBeDefined();

    expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
  });
});

it("Should display selected chat room", () => {
  renderComponent({
    chatRoomList: __MOCKED_CHAT_ROOM_LIST__,
  });

  const chatRoomsAside = screen.getByTestId("aside-chat-rooms");
  const buttons = within(chatRoomsAside).getAllByRole("button");

  expect(buttons).toHaveLength(3);
  expect(buttons[0]).toHaveTextContent("roomTitle_1");
  expect(buttons[1]).toHaveTextContent("roomTitle_2");
  expect(buttons[2]).toHaveTextContent("ADD");
  expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
});

// describe("Dashboard acts correctly", () => {
//   it("Should select a chat room", async () => {
//     renderComponent({
//       chatRoomList: __MOCKED_CHAT_ROOM_LIST__,
//     });

//     const chatRoomsAside = screen.getByTestId("aside-chat-rooms");
//     const chatRoomButton = within(chatRoomsAside).getAllByRole("button", {
//       name: "TODO",
//     })[0];

//     expect(chatRoomButton).toHaveTextContent("roomTitle_1");
//     expect(screen.getByText("Select or create a Chat Room")).toBeDefined();

//     await userEvent.click(chatRoomButton, { bubbles: true });
//     await userEvent.click(screen.getByText("roomTitle_1"), { bubbles: true });
//     await userEvent.click(chatRoomButton, { bubbles: true });
//     fireEvent.click(chatRoomButton, { bubbles: true });
//     expect(chatRoomButton).toHaveBeenCalledTimes(1);
//     // await waitFor(() => screen.getByText("roomDescription_1"));
//     screen.debug();
//     // expect(await screen.findByText("Select or create a Chat Room")).toBeDefined();
//   });
// });
