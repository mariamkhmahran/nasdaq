import { render, screen, act, waitFor } from 'utils/test-utils';
import App from '../App';

describe('SplashScreen', () => {
  test('Renders splash screen on startup', async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(
      async () => {
        let myName = screen.queryByText('Mariam Mahran');
        expect(myName).not.toBeNull();

        await new Promise((r) => setTimeout(r, 3000));

        myName = screen.queryByText('Mariam Mahran');
        expect(myName).toBeNull();
      },
      { timeout: 4000 },
    );
  });
});
