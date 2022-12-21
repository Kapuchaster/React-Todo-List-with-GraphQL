export interface StateProps {
  left: boolean;
  right: boolean;
}

export interface OpenLeftPanelAction {
  type: "OPEN_LEFT_PANEL";
  payload: { isMobile: boolean };
}

export interface CloseLeftPanelAction {
  type: "CLOSE_LEFT_PANEL";
}

export interface OpenRightPanelAction {
  type: "OPEN_RIGHT_PANEL";
  payload: { isMobile: boolean };
}

export interface CloseRightPanelAction {
  type: "CLOSE_RIGHT_PANEL";
}

export type PanelActions =
  | OpenLeftPanelAction
  | CloseLeftPanelAction
  | OpenRightPanelAction
  | CloseRightPanelAction;
