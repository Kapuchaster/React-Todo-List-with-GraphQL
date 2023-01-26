import { MockedResponse } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "../../test-utils";
import Dashboard, { Props } from "./index";
// eslint-disable-next-line jest/no-mocks-import
import { default as chatRoomListMock } from "../../__mocks__/chatRoomList";
// eslint-disable-next-line jest/no-mocks-import
import getJoinChatRoomDocumentMock from "../../__mocks__/mutations/joinChatRoomDocument";

const renderComponent = ({
  chatRoomList,
  mocks,
}: Props & { mocks?: MockedResponse<Record<string, any>>[] }) => {
  return render(<Dashboard chatRoomList={chatRoomList} />, mocks);
};

describe("Dashboard renders correctly", () => {
  it("Should display empty dashboard with side panels", () => {
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
      chatRoomList: chatRoomListMock,
    });

    for (let chatRoom of chatRoomListMock) {
      expect(screen.getByText(chatRoom.title)).toBeDefined();
    }

    expect(screen.getByText("Select or create a Chat Room")).toBeDefined();
  });
});

describe("Dashboard acts correctly", () => {
  it("Should select a chat room", async () => {
    renderComponent({
      chatRoomList: chatRoomListMock,
      mocks: [
        getJoinChatRoomDocumentMock(
          {
            authorName: "John Doe",
            roomIdToJoin: "roomId_1",
            currentRoomId: undefined,
          },
          chatRoomListMock[0]
        ),
      ],
    });
    const chatRoomToSelect = chatRoomListMock[0];
    const chatRoomsAside = screen.getByTestId("aside-chat-rooms");
    const chatRoomButton = within(chatRoomsAside).getByRole("button", {
      name: chatRoomToSelect.title,
    });

    expect(chatRoomButton).toBeInTheDocument();

    expect(
      screen.getByText("Select or create a Chat Room")
    ).toBeInTheDocument();
    expect(
      screen.queryByText(chatRoomToSelect.description)
    ).not.toBeInTheDocument();

    await userEvent.click(chatRoomButton);

    expect(
      await screen.findByText(chatRoomToSelect.description)
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Select or create a Chat Room")
    ).not.toBeInTheDocument();
  });
});
