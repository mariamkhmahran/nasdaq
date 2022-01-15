import { AxiosResponse } from 'axios';
import { Context } from 'overmind-state';
import { Ticker, TickerData, TickersResponse } from 'types/types';

// state
export type State = {
  onSplashScreen: boolean;
  allTickers: Ticker[];
  nextUrl: string | null;
  searchMode: boolean;
  resultTickers: Ticker[];
  searchNextUrl: string | null;
  cache: { [ticker: string]: TickerData };
};

// effects
export type Get = <T>(
  query: string,
  config?: QueryConfig | undefined,
  version?: string,
) => Promise<AxiosResponse<T>>;

export type Api = {
  getTickers: (
    options: QueryConfig | undefined,
    url: string | null,
  ) => Promise<TickersResponse<Ticker[]>>;
  getTickerDetails: (ticker: string) => Promise<TickersResponse<TickerData>>;
};

// actions
interface ActionResult<T = never> {
  success: boolean;
  error?: string;
  data?: T;
}

export type setOnSplashScreen = (context: Context, loading: boolean) => void;

export type loadTickers = (
  context: Context,
  options?: QueryConfig,
) => Promise<ActionResult<Ticker[]>>;

export type startSearch = (context: Context) => Promise<void>;

export type stopSearch = (context: Context) => Promise<void>;

export type getTickerData = (
  context: Context,
  ticker: string,
) => Promise<ActionResult<TickerData>>;

// types
export interface QueryConfig {
  active?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  search?: string;
  adjusted?: boolean;
}
