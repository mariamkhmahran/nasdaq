import { Context } from 'overmind-state';
import { Ticker, TickerDetails, TickersResponse } from 'types/types';

// state
export type State = {
  onSplashScreen: boolean;
  allTickers: Ticker[];
  nextUrl: string | null;
  searchMode: boolean;
  resultTickers: Ticker[];
  searchNextUrl: string | null;
  cache: { [ticker: string]: TickerDetails[] };
};

// effects
export type Api = {
  getTickers: (
    options: QueryConfig | undefined,
    url: string | null,
  ) => Promise<TickersResponse>;
  getTickerDetails: (ticker: string) => Promise<TickersResponse>;
};

// actions
interface ActionResult {
  success: boolean;
  error?: string;
  data?: any;
}

export type setOnSplashScreen = (context: Context, loading: boolean) => void;

export type loadTickers = (
  context: Context,
  options?: QueryConfig,
) => Promise<ActionResult & { data?: Ticker[] }>;

export type startSearch = (context: Context) => Promise<void>;

export type stopSearch = (context: Context) => Promise<void>;

export type getTickerDetails = (
  context: Context,
  ticker: string,
) => Promise<ActionResult & { data?: TickerDetails[] }>;

// types
export interface QueryConfig {
  active?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  search?: string;
}
