import { FC, Fragment, ReactElement } from "react";
import { useGetBlogComments } from "../../custom-hooks/use-get-blog-comments";
import { useAppContext } from "../../store/context";
import { EmptyOrError } from "../shared-comonents";
import { BlogComment } from "./blog-comment";

export interface BlogCommentsTypes {
    readonly blogId: number
};

/**
 * This component is responsible to render the blog comment list
 * @params blogId
 * @returns ReactElement
 */
export const BlogComments: FC<BlogCommentsTypes> = ({ blogId }): ReactElement => {
    //get total comments from context api store
    const { totalCountComments } = useAppContext();

    //get comments from custom hook
    const { comments } = useGetBlogComments(blogId);

    return (<Fragment>
        {totalCountComments > 0 ? comments?.comments.map(comment => <BlogComment key={comment.id} comment={comment} />) : <EmptyOrError height="20px" color="black">No Comments available</EmptyOrError>}
    </Fragment>)
};