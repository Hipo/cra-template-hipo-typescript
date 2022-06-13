const BASE_ROOT = "/" as const;

const ROUTES = {
  HOME: BASE_ROOT,
  HELP: `${BASE_ROOT}help`,
  ACCOUNT: `${BASE_ROOT}account`,

  COMPONENT_LIST: `/components`
} as const;

export default ROUTES;
