import { fireEvent, render } from '@testing-library/react';
import { PaginatedItems } from '../pagination';

//mock custom hook response
jest.mock('../../../../store/context', () => ({
    useAppContext: () => ({
        setSkipCount: jest.fn(),
        totalCount: 20,
        setSkipCountComments: jest.fn(),
        totalCountComments: 20
    })
}));

describe('PaginatedItems component', () => {
    test('renders PaginatedItems', () => {
        const component = render(<PaginatedItems itemsPerPage={10} type='blogList' />);

        expect(component).toMatchSnapshot();
    });

    test('handlePageClick is clicked', async () => {
        const component = render(<PaginatedItems itemsPerPage={10} type='blogList' />);

        const pageButton = await component.findAllByRole('button')

        fireEvent.click(pageButton[0]);
    });
})

