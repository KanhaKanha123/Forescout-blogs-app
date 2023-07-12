import { FC, ReactElement } from "react";
import { BlogsList, PaginatedItems } from "../../components";
import config from "../../config";
import { useAppContext } from "../../store/context";
import { BlogsAndLPaginationWrapper } from "./style";

/**
 * This component is responsible render the blog lists page on router request.
 * @returns ReactElement
 */
export const Home: FC = (): ReactElement => {
    const { totalCount } = useAppContext();

    //function to check if pagination should show or not on UI
    const isShowPagination = () => (config.blogsPageLimit < totalCount);

    return <main area-label="main section to display all the blogs">
        <BlogsAndLPaginationWrapper>
            <BlogsList area-label='all blogs are listed here' />
            {isShowPagination() && <PaginatedItems type='blogList' itemsPerPage={config.blogsPageLimit} />}
        </BlogsAndLPaginationWrapper>
    </main>
};