import { waitFor, render } from 'utils/test-utils';
import DetailsScreen from 'screens/details-screen';

describe('DetailsScreen', () => {
  test('Renders Details correctly', async () => {
    const container = render(<DetailsScreen />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
