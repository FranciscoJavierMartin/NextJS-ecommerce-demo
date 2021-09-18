import React, {
  createContext,
  FC,
  useContext,
  useReducer,
  useMemo,
} from 'react';
import { UIActionTypes } from './actions';
import { uiReducer } from './reducer';

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers: StateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState: StateValues = {
  isSidebarOpen: false,
};

type UIState = StateValues & StateModifiers;

const UIContext = createContext<UIState>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: UIActionTypes.OPEN_SIDEBAR });
  const closeSidebar = () => dispatch({ type: UIActionTypes.CLOSE_SIDEBAR });

  const uiState: UIState = useMemo<UIState>(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
    }),
    [state.isSidebarOpen]
  );

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  return useContext(UIContext);
};
