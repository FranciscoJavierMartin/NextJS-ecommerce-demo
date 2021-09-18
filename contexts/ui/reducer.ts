import { StateValues } from './UIWrapper';
import { UIActionType, UIActionTypes } from './actions';

export function uiReducer(
  state: StateValues,
  action: UIActionType
): StateValues {
  let res: StateValues;

  switch (action.type) {
    case UIActionTypes.OPEN_SIDEBAR:
      res = {
        ...state,
        isSidebarOpen: true,
      };
      break;
    case UIActionTypes.CLOSE_SIDEBAR:
      res = {
        ...state,
        isSidebarOpen: false,
      };
      break;
    default:
      res = state;
  }

  return res;
}
