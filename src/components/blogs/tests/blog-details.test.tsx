import { render } from '@testing-library/react';
import { BlogDetails } from '../blog-details';
import { TestWrapper } from '../../../test-utils/test-wrapper';

//mock custom hook response
jest.mock('../../../custom-hooks/use-get-single-blog', () => ({
  useGetSingleBlog: () => ({
    blog: {
      body: 'hello i am here',
      id: 1,
      reactions: 5,
      tags: ['one', 'two'],
      title: 'the best blog',
      userId: 1
    },
    isLoading: false,
    error: null
  })
}));

jest.mock('../../../custom-hooks/use-get-user-data', () => ({
  useGetUserData: () => ({
    userData: {
      id: 1,
      firstName: 'test',
      lastName: 'test name',
      age: 30,
    }
  })
}));

const rederComponent = () => render(<TestWrapper>
  <BlogDetails />
</TestWrapper>);

describe('BlogDetails component', () => {

  test('renders BlogDetails component proper', () => {

    const component = rederComponent();

    expect(component).toMatchSnapshot();
  });

  test('renders BlogDetails component should have proper props', () => {

    const component = rederComponent();

    const blogBody = component.getByText(/hello i am here/i);

    const blogTitle = component.getByText(/the best blog/i);

    const authourName = component.getByText(/test test name/i);

    expect(blogBody).toBeInTheDocument();

    expect(blogTitle).toBeInTheDocument();

    expect(authourName).toBeInTheDocument();
  });
});
