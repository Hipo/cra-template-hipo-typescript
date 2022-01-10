import {appState} from "./appState";

export type AppStateReducerAction = {
  type: "SET_HAS_LOGGED_IN";
};

function appStateReducer(state: typeof appState, action: AppStateReducerAction) {
  let newState = state;

  switch (action.type) {
    case "SET_HAS_LOGGED_IN": {
      const newValue = !state.hasLoggedIn;

      newState = {
        ...state,
        hasLoggedIn: newValue
      };
      break;
    }

    default:
      break;
  }

  return newState;
}

export {appStateReducer, appState};
