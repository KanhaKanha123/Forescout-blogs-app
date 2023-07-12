import { FC, ReactElement } from "react";
import { BlogCommentWrapper, Text, UserNameWrapper, Image, BlogCommentTextWrapper } from "./style";
import userImg from "../../assets/icons/user-Icon.png";
import { BlogSingleCommentTypes } from "../../custom-hooks/use-get-blog-comments";

export interface SingleBlogCommentTypes {
    readonly comment: BlogSingleCommentTypes
};

/**
 * This component is responsible to render the blog single comment and user details who added the comment.
 * @params comment
 * @returns ReactElement
 */
export const BlogComment: FC<SingleBlogCommentTypes> = ({ comment }): ReactElement => {

    return <BlogCommentWrapper aria-label="Single comment container">
        <UserNameWrapper aria-label="User name and user icon contaainer">
            <Image aria-label="user icon" src={userImg}></Image>
            <Text aria-label="user name">{comment.user.username}</Text>
        </UserNameWrapper>
        <BlogCommentTextWrapper aria-label="comment detail description">{comment.body}</BlogCommentTextWrapper>
    </BlogCommentWrapper>
};