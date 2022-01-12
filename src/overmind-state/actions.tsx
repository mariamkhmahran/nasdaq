import { TickerDetails } from 'types/types';
import * as Actions from './types';

export const setOnSplashScreen: Actions.setOnSplashScreen = ({ state }, loading) => {
  state.onSplashScreen = loading;
};

export const loadTickers: Actions.loadTickers = async (
  { state, effects },
  options = {},
) => {
  try {
    const response = await effects.api.getTickers(options, state.nextUrl);
    const { next_url, results, status, error } = response;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.allTickers = [...state.allTickers, ...results];
    state.nextUrl = next_url || '';

    return { success: true, data: results };
  } catch (err) {
    const message = (err as Error).message || 'Error loading stocks data.';
    return { success: false, error: message };
  }
};

export const startSearch: Actions.startSearch = async ({ state }) => {
  state.resultTickers = [];
  state.searchMode = true;
};

export const stopSearch: Actions.stopSearch = async ({ state }) => {
  state.searchNextUrl = null;
  state.searchMode = false;
};

export const searchTickers: Actions.loadTickers = async (
  { state, effects },
  options = {},
) => {
  try {
    const response = await effects.api.getTickers(options, state.searchNextUrl);
    const { next_url, results, status, error } = response;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.resultTickers = [...state.resultTickers, ...results];
    state.searchNextUrl = next_url || '';

    return { success: true, data: results };
  } catch (err) {
    const message = (err as Error).message || 'Error loading results.';
    return { success: false, error: message };
  }
};

export const getTickerDetails: Actions.getTickerDetails = async (
  { state, effects },
  ticker,
) => {
  try {
    if (ticker in state.cache) {
      return { success: true, data: state.cache[ticker] };
    }

    const response = await effects.api.getTickerDetails(ticker);
    const { results, status, error } = response;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.cache[ticker] = results as TickerDetails[];

    return { success: true, data: results as TickerDetails[] };
  } catch (err) {
    const message = (err as Error).message || 'Error loading results.';
    return { success: false, error: message };
  }
};
