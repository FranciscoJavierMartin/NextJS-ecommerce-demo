export enum UIActionTypes {
  OPEN_SIDEBAR = 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
}

export type UIActionType =
  | { type: UIActionTypes.OPEN_SIDEBAR }
  | { type: UIActionTypes.CLOSE_SIDEBAR };

