import { PanelActions, StateProps } from "./types";

const reducer = (state: StateProps, action: PanelActions): StateProps => {
  switch (action.type) {
    case "OPEN_LEFT_PANEL":
      return action.payload.isMobile
        ? { left: true, right: false }
        : { left: true, right: state.right };
    case "OPEN_RIGHT_PANEL":
      return action.payload.isMobile
        ? { left: false, right: true }
        : { left: state.left, right: true };
    case "CLOSE_LEFT_PANEL":
      return { left: false, right: state.right };
    case "CLOSE_RIGHT_PANEL":
      return { left: state.left, right: false };
    default:
      throw new Error();
  }
};

export default reducer;
