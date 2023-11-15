import React from 'react';

type AppState = {
  modal: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

const AppStateContext = React.createContext<AppState | undefined>(undefined);

export const useAppState = function () {
  const context = React.useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used inside a `AppStateProvider`');
  }

  return context;
};

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [ modal, setModal ] = React.useState<React.ReactNode>();

  return (
    <AppStateContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
