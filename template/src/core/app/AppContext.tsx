import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

import {appState} from "./appState";
import {appStateReducer, AppStateReducerAction} from "./appStateReducer";

const initialAppContextValue = {
  state: appState,
  dispatch: (() => undefined) as Dispatch<AppStateReducerAction>
};

const AppContext = createContext(initialAppContextValue);

AppContext.displayName = "AppContext";

function AppContextProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(appStateReducer, appState);

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
