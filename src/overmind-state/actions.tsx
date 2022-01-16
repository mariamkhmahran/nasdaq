import * as Actions from './types';
import { TickersResponse } from '../types/types';

export const setOnSplashScreen: Actions.setOnSplashScreen = ({ state }, loading) => {
  state.onSplashScreen = loading;
};

export const loadTickers: Actions.loadTickers = async (
  { state, effects },
  options = {},
) => {
  let responseStatus: TickersResponse['status'] = 'OK';
  try {
    const response = await effects.api.getTickers(options, state.nextUrl);
    const { next_url, results, status, error } = response;
    responseStatus = status;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.allTickers = [...state.allTickers, ...results];
    state.nextUrl = next_url || '';

    return { success: true, data: results, status };
  } catch (err) {
    const message = (err as Error).message || 'Error loading stocks data.';
    return { success: false, error: message, status: responseStatus };
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
  let responseStatus: TickersResponse['status'] = 'OK';
  try {
    const response = await effects.api.getTickers(options, state.searchNextUrl);
    const { next_url, results, status, error } = response;
    responseStatus = status;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.resultTickers = [...state.resultTickers, ...results];
    state.searchNextUrl = next_url || '';

    return { success: true, data: results };
  } catch (err) {
    const message = (err as Error).message || 'Error loading results.';
    return { success: false, error: message, status: responseStatus };
  }
};

export const getTickerData: Actions.getTickerData = async (
  { state, effects },
  ticker,
) => {
  let responseStatus: TickersResponse['status'] = 'OK';
  try {
    if (ticker in state.cache) {
      return { success: true, data: state.cache[ticker] };
    }

    const response = await effects.api.getTickerDetails(ticker);
    const { results, status, error } = response;
    responseStatus = status;

    if (!!error || status !== 'OK' || !results) throw new Error(error);

    state.cache[ticker] = results;

    return { success: true, data: results };
  } catch (err) {
    const message = (err as Error).message || 'Error loading results.';
    return { success: false, error: message, status: responseStatus };
  }
};
