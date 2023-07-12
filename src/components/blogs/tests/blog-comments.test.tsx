import { render } from '@testing-library/react';
import { BlogComments } from '../blog-comments';
import { TestWrapper } from '../../../test-utils/test-wrapper';

//mock custom hook response
jest.mock('../../../custom-hooks/use-get-blog-comments', () => ({
  useGetBlogComments: () => ({
    comments: {
      comments: [{
        id: 1,
        body: 'test comment',
        postId: 1,
        user: {
          id: 1,
          username: 'test user name'
        }
      }]
    },
    isLoading: false,
    error: null
  })
}));

const rederComponent = () => render(<TestWrapper>
  <BlogComments blogId={1} />
</TestWrapper>);

describe('BlogComments component', () => {

  test('renders BlogComments component proper', () => {

    const component = rederComponent();

    expect(component).toMatchSnapshot();
  });
});
