import { render } from '@testing-library/react';
import { BlogDetailsPage } from '../blog-details-page';
import { TestWrapper } from '../../../test-utils/test-wrapper';

describe('BlogDetailsPage component', () => {

    test('renders BlogDetailsPage component proper', () => {

        const component = render(<TestWrapper>
            <BlogDetailsPage />
        </TestWrapper>);

        expect(component).toMatchSnapshot();
    });
});
