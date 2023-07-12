import { FC, Fragment, ReactElement, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Button,
    Card,
    HandleLoadingEmptyErrorState,
    PaginatedItems
} from "../shared-comonents";
import {
    BlogsWrapper,
    AuthourText,
    CommentsWrapper,
    CommentsTextAndButtonWrapper,
    Text,
    Header,
    ReactionsContainer,
    BodyContainer,
    TitleTextWrapper,
    BlogBody,
    AddNewCommentsWrapper
} from "./style";
import {
    useGetSingleBlog,
    useGetUserData,
} from "../../custom-hooks";
import { useAppContext } from "../../store/context";
import config from "../../config";
import { BlogComments } from "./blog-comments";
import { AddNewComments } from "./add-new-comments";

/**
 * This component is responsible to render the blog details and the comment list component
 * @returns ReactElement
 */
export const BlogDetails: FC = (): ReactElement => {

    const [isAddNewCommentFormShow, setIsAddNewCommentFormShow] = useState<boolean>(false);

    //get blogId from url params
    const { blogId } = useParams<string>();

    //get  blog data from hook
    const { blog, isLoading, error } = useGetSingleBlog(blogId!);

    //get userData data from hook
    const { userData } = useGetUserData(blog?.userId!);

    //get totalCountComments data from context provider
    const { totalCountComments } = useAppContext();

    const showHideAddNewCommentBoxHandler = () => setIsAddNewCommentFormShow(prevState => !prevState);

    return (
        <HandleLoadingEmptyErrorState data={blog} isLoading={isLoading} error={error}>
            <BlogsWrapper aria-label="container with blog details">
                <Card
                    width="1000px"
                    height="auto"
                    padding="15px"
                    backgroundcolor="#f4f4f4">
                    <Header>
                        <TitleTextWrapper aria-label="blog title here">
                            {blog?.title}
                        </TitleTextWrapper>
                        <Link aria-label="link to go back" className="linkStyle" to="/">{`<- Go Back`}</Link>
                    </Header>
                    <BodyContainer aria-label="authour name and blog description container">
                        <AuthourText aria-label="authour name">Authour: {userData?.firstName} {userData?.lastName}</AuthourText>
                        <BlogBody aria-label="authour name">{blog?.body}</BlogBody>
                    </BodyContainer>
                    <CommentsTextAndButtonWrapper aria-label="comments static text and add new button container">
                        <ReactionsContainer>
                            <Text aria-label="comments static text">
                                Comments
                            </Text>
                        </ReactionsContainer>
                        <Button aria-label="Add new button" backgroundcolor="#4792ef" onClick={showHideAddNewCommentBoxHandler}>Add New</Button>
                    </CommentsTextAndButtonWrapper>
                    <CommentsWrapper aria-label="Comments list and pagination container">
                        <Fragment>
                            {blog?.id && <BlogComments blogId={blog?.id}></BlogComments>}
                            {config.commentsPageLimit < totalCountComments && <PaginatedItems aria-label="Pagination container" type='commentList' itemsPerPage={config.commentsPageLimit} />}
                        </Fragment>
                    </CommentsWrapper>
                </Card>
                {isAddNewCommentFormShow && <AddNewCommentsWrapper aria-label="Add new comment container">
                    <AddNewComments blogId={blog?.id!} showHideAddNewCommentBoxHandler={showHideAddNewCommentBoxHandler}></AddNewComments>
                </AddNewCommentsWrapper>}
            </BlogsWrapper>
        </HandleLoadingEmptyErrorState>
    )
}