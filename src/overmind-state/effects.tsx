import Axios, { AxiosError } from 'axios';
import {
  OpenClose,
  PrevClose,
  Ticker,
  TickerData,
  TickerDetails,
  TickersResponse,
} from 'types/types';
import { Api, Get, QueryConfig } from './types';

const Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

const parseConfig = (config?: QueryConfig) => {
  if (!config) return '';

  const params: string[] = [];
  Object.entries(config).forEach(([attr, value]) => params.push(`${attr}=${value}`));
  return `?${params.join('&')}`;
};

const get: Get = (query: string, config?: QueryConfig, version = 'v3') => {
  const url = `https://api.polygon.io/${version}`;
  const options = parseConfig(config);
  const PATH = `${url}${query}${options}`;
  const headers = { Authorization };

  return Axios.get(PATH, { headers });
};

export const api: Api = {
  getTickers: async (config = {}, url = '') => {
    return get<TickersResponse<Ticker[]>>(url || `/reference/tickers`, url ? {} : config)
      .then((response) => response.data)
      .catch((err: Error | AxiosError) => {
        const message = Axios.isAxiosError(err) ? err.response?.data.error : err.message;
        return { status: 'ERROR', error: message };
      });
  },
  getTickerDetails: async (ticker) => {
    return fetchTickerDetails(ticker)
      .then(fetchOpenClose)
      .catch((err: Error | AxiosError) => {
        const message = Axios.isAxiosError(err) ? err.response?.data.error : err.message;
        return { status: 'ERROR', error: message };
      });
  },
};

const fetchTickerDetails = async (
  ticker: string,
): Promise<TickersResponse<TickerDetails>> => {
  return get<TickersResponse<TickerDetails>>(`/reference/tickers/${ticker}`).then(
    (response) => response.data,
  );
};

const parseOpenCloseData = ({ results, ticker, status }: PrevClose): OpenClose => ({
  close: results[0].c,
  high: results[0].h,
  low: results[0].l,
  open: results[0].o,
  volume: results[0].v,
  symbol: ticker,
  status,
});

const fetchOpenClose = async (response: TickersResponse<TickerDetails>) => {
  const tickerDetails = response.results;
  if (!tickerDetails) throw new Error();

  const ticker = tickerDetails?.ticker;

  // polygon does not support queries from 2022 (as of the day I rote this)
  // as a quick fix I'll fetch previous day's data
  // FIXME: get current data
  const path = `/aggs/ticker/${ticker}/prev`;

  return get<PrevClose>(path, { adjusted: true }, 'v2').then(({ data }) => {
    const prevClose = data;

    if (!prevClose) throw new Error();

    const tickerOpenClose = parseOpenCloseData(data);
    const tickerData: TickerData = { ...tickerDetails, ...tickerOpenClose };
    return { results: tickerData, status: 'OK' } as TickersResponse<TickerData>;
  });
};
