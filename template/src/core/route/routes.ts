const BASE_ROOT = "/" as const;

const ROUTES = {
  HOME: BASE_ROOT,
  HELP: `${BASE_ROOT}help`
} as const;

export default ROUTES;
