import * as Actions from './types';

export const setIsLoading: Actions.setIsLoading = ({ state }, loading) => {
  state.isLoading = loading;
};

export const loadTickers: Actions.loadTickers = async (
  { state, effects },
  options = {},
) => {
  try {
    const response = await effects.api.getTickers(options, state.nextUrl);
    const { next_url, results, status, error } = response;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.tickers = results;
    state.nextUrl = next_url || '';

    return { success: true, data: results };
  } catch (err) {
    const message = (err as Error).message || 'Error loading stocks data.';
    return { success: false, error: message };
  }
};
