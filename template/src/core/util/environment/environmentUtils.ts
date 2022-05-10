function isOnDevEnv() {
  return process.env.REACT_APP_BUILD_ENVIRONMENT === "dev";
}

function isOnStagingEnv() {
  return process.env.REACT_APP_BUILD_ENVIRONMENT === "staging";
}

function isOnProductionEnv() {
  return process.env.REACT_APP_BUILD_ENVIRONMENT === "production";
}

export {isOnDevEnv, isOnStagingEnv, isOnProductionEnv};
