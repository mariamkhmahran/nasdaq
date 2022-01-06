export interface Ticker {
  active: boolean;
  cik: string;
  composite_figi: string;
  currency_name: string;
  last_updated_utc: string;
  locale: string;
  market: string;
  name: string;
  primary_exchange: string;
  share_class_figi: string;
  ticker: string;
  type: string;
}

export interface TickersResponse {
  count?: number;
  next_url?: string;
  request_id?: string;
  results?: Ticker[];
  error?: string;
  status: 'OK' | 'ERROR';
}
