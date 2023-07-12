import { render } from '@testing-library/react';
import { Home } from '../home-page';
import { TestWrapper } from '../../../test-utils/test-wrapper';

describe('Home component', () => {

  test('renders home component proper', () => {

    const component = render(<TestWrapper>
      <Home />
    </TestWrapper>);

    expect(component).toMatchSnapshot();
  });
});
