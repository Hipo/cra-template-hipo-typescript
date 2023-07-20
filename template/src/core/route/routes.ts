const BASE_ROOT = "/" as const;

const ROUTES = {
  HOME: BASE_ROOT,
  HELP: `${BASE_ROOT}help`,
  ACCOUNT: `${BASE_ROOT}account`,
  ORGANIZATION_DETAIL: `${BASE_ROOT}organization/:organizationId`
} as const;

export default ROUTES;
