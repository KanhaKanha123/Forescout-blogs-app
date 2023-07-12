import { fireEvent, render } from '@testing-library/react';
import { BlogsList } from '../blogs-list';
import { TestWrapper } from '../../../test-utils/test-wrapper';
import * as router from 'react-router';

//mock custom hook response
jest.mock('../../../custom-hooks/use-get-blogs', () => ({
  useGetBlogs: () => ({
    blogs: [{
      body: 'hello i am here',
      id: 1,
      reactions: 5,
      tags: ['one', 'two'],
      title: 'the best blog',
      userId: 1
    }],
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
  <BlogsList />
</TestWrapper>);

describe('BlogsList component', () => {

  const navigate = jest.fn()

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  test('renders BlogsList component proper', () => {

    const component = rederComponent();

    expect(component).toMatchSnapshot();
  });

  test('renders BlogsList component should have proper props', () => {

    const component = rederComponent();

    const blogBody = component.getByText(/hello i am here/i);

    const blogTitle = component.getByText(/the best blog/i);

    expect(blogBody).toBeInTheDocument();

    expect(blogTitle).toBeInTheDocument();
  });

  test('cardClickHandler should be called', () => {

    const component = rederComponent();

    const card = component.getByTestId('Card_1')

    fireEvent.click(card)

    expect(navigate).toHaveBeenCalledWith('/blog/1', { "replace": true })
  });

});
