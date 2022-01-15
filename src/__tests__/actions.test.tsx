import { createOvermindMock } from 'overmind';
import { config } from '../overmind-state';
import { Ticker, TickerData, TickersResponse } from 'types/types';

const mockTicker: Ticker = {
  active: true,
  cik: '0001090872',
  composite_figi: 'BBG000BWQYZ5',
  currency_name: 'usd',
  last_updated_utc: '2021-04-25T00:00:00Z',
  locale: 'us',
  market: 'stocks',
  name: 'Agilent Technologies Inc.',
  primary_exchange: 'XNYS',
  share_class_figi: 'BBG001SCTQY4',
  ticker: 'A',
  type: 'CS',
};

const mockTickerData: TickerData = {
  ...mockTicker,
  close: 1,
  high: 2,
  low: 3,
  open: 4,
  volume: 5,
  status: 'OK',
  symbol: 'A',
};

const mockApi = {
  getTickers: () => {
    return Promise.resolve<TickersResponse<Ticker[]>>({
      count: 1,
      status: 'OK',
      results: [mockTicker],
      next_url: 'www.next.url.test',
    });
  },
  getTickerDetails: () => {
    return Promise.resolve<TickersResponse<TickerData>>({
      status: 'OK',
      results: mockTickerData,
    });
  },
};

describe('Actions', () => {
  describe('getTickers', () => {
    test('should get a list of tickers', async () => {
      const overmind = createOvermindMock(config, { api: mockApi });
      await overmind.actions.loadTickers();

      expect(overmind.state).toEqual({
        onSplashScreen: true,
        allTickers: [mockTicker],
        nextUrl: 'www.next.url.test',
        searchMode: false,
        resultTickers: [],
        searchNextUrl: null,
        cache: {},
      });
    });

    test('Should search tickers', async () => {
      const overmind = createOvermindMock(config, { api: mockApi });

      await overmind.actions.startSearch();
      await overmind.actions.searchTickers();

      expect(overmind.state).toEqual({
        onSplashScreen: true,
        allTickers: [],
        nextUrl: null,
        searchMode: true,
        resultTickers: [mockTicker],
        searchNextUrl: 'www.next.url.test',
        cache: {},
      });

      await overmind.actions.stopSearch();

      expect(overmind.state).toEqual({
        onSplashScreen: true,
        allTickers: [],
        nextUrl: null,
        searchMode: false,
        resultTickers: [mockTicker],
        searchNextUrl: null,
        cache: {},
      });
    });
  });

  describe('getTickerDetails', () => {
    test('Should get Ticker Data', async () => {
      const overmind = createOvermindMock(config, { api: mockApi });

      const { data } = await overmind.actions.getTickerData('A');

      expect(data).toEqual(mockTickerData);

      expect(overmind.state).toEqual({
        onSplashScreen: true,
        allTickers: [],
        nextUrl: null,
        searchMode: false,
        resultTickers: [],
        searchNextUrl: null,
        cache: { A: data },
      });
    });
  });
});
