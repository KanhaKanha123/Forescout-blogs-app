import { FC, ReactElement } from "react";
import { BlogDetails } from "../../components/";

/**
 * This component is responsible render the blog details page on router request.
 * @returns ReactElement
 */
export const BlogDetailsPage: FC = (): ReactElement => {

    return <section area-label='blog details is listed here'>
        <BlogDetails />
    </section>
};