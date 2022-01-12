import Axios, { AxiosError } from 'axios';
import { TickersResponse } from 'types/types';
import { Api, QueryConfig } from './types';

const Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

const formatPath = (query: string, config?: QueryConfig) => {
  const PATH = 'https://api.polygon.io/v3';
  const options = parseConfig(config);

  return `${PATH}${query}${options}`;
};

const parseConfig = (config?: QueryConfig) => {
  if (!config) return '';

  const params: string[] = [];
  Object.entries(config).forEach(([attr, value]) => params.push(`${attr}=${value}`));
  return `?${params.join('&')}`;
};

export const api: Api = {
  getTickers: async (config = {}, url = '') => {
    const path = url || formatPath(`/reference/tickers`, config);

    return Axios.get(path, { headers: { Authorization } })
      .then((response) => response.data as TickersResponse)
      .catch((err: Error | AxiosError) => {
        const message = Axios.isAxiosError(err) ? err.response?.data.error : err.message;
        return { status: 'ERROR', error: message };
      });
  },
  getTickerDetails: async (ticker) => {
    const path = formatPath(`/reference/tickers/${ticker}`);
    return Axios.get(path, { headers: { Authorization } })
      .then((response) => response.data as TickersResponse)
      .catch((err: Error | AxiosError) => {
        const message = Axios.isAxiosError(err) ? err.response?.data.error : err.message;
        return { status: 'ERROR', error: message };
      });
  },
};
