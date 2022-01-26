const initialAppState = {
  hasLoggedIn: false
};

export type AppStateReducerAction = {
  type: "SET_HAS_LOGGED_IN";
};

function appStateReducer(state: typeof initialAppState, action: AppStateReducerAction) {
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

export {appStateReducer, initialAppState};
