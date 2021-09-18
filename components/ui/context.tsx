import React, { createContext, FC, useContext, useState } from 'react';

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
  const openSidebar = () => alert('Openning sidebar');
  const closeSidebar = () => alert('Closing sidebar');

  const uiState: UIState = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: true,
  };

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  return useContext(UIContext);
};
