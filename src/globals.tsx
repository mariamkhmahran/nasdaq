const BASE_URL = process.env.REACT_APP_BASE_URL || '';

export const PATHS = {
  exploreScreen: `${BASE_URL}/explore`,
  detailsScreen: `${BASE_URL}/details/:ticker`,
  errorScreen: `${BASE_URL}/something-went-wrong`,
};
