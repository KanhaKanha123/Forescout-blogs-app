import { render } from '@testing-library/react';
import { HandleLoadingEmptyErrorState } from '../handle-loading-empty-error-state';
import { TestWrapper } from '../../../../test-utils/test-wrapper';
import { blogData } from '../../../blogs/tests/fixture/mock-data';
import { FC } from 'react';

const TestComponent: FC = () => <span>Works fine</span>;

describe('HandleLoadingEmptyErrorState component', () => {

  test('renders HandleLoadingEmptyErrorState component proper', () => {

    const component = render(<TestWrapper>
      <HandleLoadingEmptyErrorState
        data={blogData}
        isLoading={false}
        error={null}
      ><TestComponent /></HandleLoadingEmptyErrorState>
    </TestWrapper>);

    expect(component).toMatchSnapshot();
  });
});
