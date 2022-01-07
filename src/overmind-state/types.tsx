import { Context } from 'overmind-state';
import { Ticker, TickersResponse } from 'types/types';

// state
export type State = {
  onSplashScreen: boolean;
  tickers: Ticker[];
  nextUrl: string | null;
};

// effects
export type Api = {
  getTickers: (
    options: QueryConfig | undefined,
    url: string | null,
  ) => Promise<TickersResponse>;
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

// types
export interface QueryConfig {
  active?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
}
