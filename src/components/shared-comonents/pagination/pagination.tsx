import { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppContext } from '../../../store/context';
import { PaginationWrapper } from './style';

interface PaginatedItemsTypes {
    itemsPerPage: number;
    type?: 'blogList' | 'commentList'
}

/**
 * This component is responsible to handle pagination for the app.It's a resuable component.
 * @params itemsPerPage
 * @params type
 * @returns ReactElement
 */
export const PaginatedItems: FC<PaginatedItemsTypes> = ({ itemsPerPage, type }): ReactElement => {
    //getting data from context api. which is set by hooks or other components
    const { setSkipCount, totalCount, setSkipCountComments, totalCountComments } = useAppContext();

    //set items count
    const totalItems = new Array(type === 'blogList' ? totalCount : totalCountComments);

    //calculate pages
    const pageCount = Math.ceil(totalItems.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const skipCount = event.selected * itemsPerPage;

        type === 'blogList' ? setSkipCount(skipCount) : setSkipCountComments(skipCount);
    };

    return (<PaginationWrapper>
        <ReactPaginate
            className='pagination'
            pageClassName='pageClass'
            activeClassName='activeClass'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    </PaginationWrapper>);
}
