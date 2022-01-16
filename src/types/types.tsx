export interface Ticker {
  active: boolean;
  cik: string;
  composite_figi: string;
  currency_name: string;
  last_updated_utc: string;
  locale: 'us' | 'global';
  market: 'stocks' | 'crypto' | 'fx';
  name: string;
  primary_exchange: string;
  share_class_figi: string;
  ticker: string;
  type: string;
}

export interface TickersResponse<T = never> {
  count?: number;
  next_url?: string;
  request_id?: string;
  results?: T;
  error?: string;
  status: 'OK' | 'ERROR' | number;
}

export interface TickerDetails extends Ticker {
  description?: string;
  homepage_url?: string;
  list_date?: string;
  market_cap?: number;
  phone_number?: string;
  share_class_shares_outstanding?: number;
  sic_code?: string;
  sic_description?: string;
  total_employees?: number;
  weighted_shares_outstanding?: number;
  address?: {
    address1: string;
    city: string;
    state: string;
  };
  branding?: {
    icon_url: string;
    logo_url: string;
  };
}

export interface OpenClose {
  close: number;
  high: number;
  low: number;
  open: number;
  volume: number;
  status: string;
  symbol: string;
}

export interface PrevClose {
  adjusted: boolean;
  queryCount: number;
  request_id: string;
  results: {
    T: string;
    c: number;
    h: number;
    l: number;
    o: number;
    t: number;
    v: number;
    vw: number;
  }[];
  resultsCount: 1;
  status: string;
  ticker: string;
}

export type TickerData = TickerDetails & OpenClose;
