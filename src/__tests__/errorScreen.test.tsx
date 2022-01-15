import { waitFor, render } from 'utils/test-utils';
import { ErrorScreen } from 'screens/error-screen/errorScreen';

describe('ErrorScreen', () => {
  test('Renders Error page correctly', async () => {
    const container = render(<ErrorScreen />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
