import { render } from '@testing-library/react';
import { BlogComment } from '../blog-comment';
import { TestWrapper } from '../../../test-utils/test-wrapper';
import { commentData } from './fixture/mock-data';

const rederComponent = () => render(<TestWrapper>
  <BlogComment comment={commentData} />
</TestWrapper>);

describe('BlogComment component', () => {

  test('renders BlogComment component proper', () => {

    const component = rederComponent();

    expect(component).toMatchSnapshot();
  });

  test('renders BlogComment component should have proper props', () => {

    const component = rederComponent();

    const commentBody = component.getByText(/test comment/i);

    const testName = component.getByText(/test name/i);

    expect(commentBody).toBeInTheDocument();

    expect(testName).toBeInTheDocument();
  });
});
