const initialAppState = {
  account: null as null | Record<string, any>
};

export type AppStateReducerAction = {
  type: "SET_LOGGED_IN_ACCOUNT";
  account: null | Record<string, any>;
};

function appStateReducer(state: typeof initialAppState, action: AppStateReducerAction) {
  let newState = state;

  switch (action.type) {
    case "SET_LOGGED_IN_ACCOUNT": {
      newState = {
        ...state,
        account: action.account
      };
      break;
    }

    default:
      break;
  }

  return newState;
}

export {appStateReducer, initialAppState};
