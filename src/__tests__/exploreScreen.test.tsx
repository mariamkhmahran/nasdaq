import { waitFor, render } from 'utils/test-utils';
import ExploreScreen from 'screens/explore-screen';

describe('ExploreScreen', () => {
  test('Renders Explore correctly', async () => {
    const container = render(<ExploreScreen />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
