import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

import {appStateReducer, AppStateReducerAction, initialAppState} from "./appStateReducer";

const initialAppContextValue = {
  state: initialAppState,
  dispatch: (() => undefined) as Dispatch<AppStateReducerAction>
};

const AppContext = createContext(initialAppContextValue);

AppContext.displayName = "AppContext";

function AppContextProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(appStateReducer, initialAppState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export {AppContext, AppContextProvider, useAppContext};
