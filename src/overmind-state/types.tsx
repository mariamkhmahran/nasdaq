import { Context } from 'overmind-state';
import { Ticker, TickersResponse } from 'types/types';

// state
export type State = {
  onSplashScreen: boolean;
  allTickers: Ticker[];
  nextUrl: string | null;
  searchMode: boolean;
  resultTickers: Ticker[];
  searchNextUrl: string | null;
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

export type startSearch = (context: Context) => Promise<void>;

export type stopSearch = (context: Context) => Promise<void>;

// types
export interface QueryConfig {
  active?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
  search?: string;
}
