import { waitFor, render } from 'utils/test-utils';
import { NotFound } from 'screens/not-found/NotFound';

describe('404 Screen', () => {
  test('Renders 404 page correctly', async () => {
    const container = render(<NotFound />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
