import {
  CloseLeftPanelAction,
  CloseRightPanelAction,
  OpenLeftPanelAction,
  OpenRightPanelAction,
} from "./types";

export const openPanelAction = (
  side: "left" | "right",
  isMobile: boolean
): OpenLeftPanelAction | OpenRightPanelAction =>
  side === "left"
    ? {
        type: "OPEN_LEFT_PANEL",
        payload: { isMobile },
      }
    : {
        type: "OPEN_RIGHT_PANEL",
        payload: { isMobile },
      };

export const closePanelAction = (
  side: "left" | "right"
): CloseLeftPanelAction | CloseRightPanelAction =>
  side === "left"
    ? {
        type: "CLOSE_LEFT_PANEL",
      }
    : {
        type: "CLOSE_RIGHT_PANEL",
      };
