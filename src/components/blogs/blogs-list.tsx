import { FC, ReactElement } from "react";
import { Button, Card, HandleLoadingEmptyErrorState } from "../shared-comonents";
import {
    BlogsWrapper,
    Image,
    Text,
    CommentsTextAndButtonWrapper,
    Header,
    ReactionsContainer,
    TagsContainer,
    BodyContainer,
    TitleTextWrapper,
    BlogBody
} from "./style";
import chatImg from "../../assets/icons/chat-icon.jpeg";
import { useNavigate } from 'react-router-dom';
import { useGetBlogs } from "../../custom-hooks";

/**
 * This component is responsible to render all the blogs in cards with few details.
 * @returns ReactElement
 */
export const BlogsList: FC = (): ReactElement => {
    const navigate = useNavigate();

    //get blogs data from custom hook
    const { blogs, isLoading, error } = useGetBlogs();

    //on click navigate to details page
    const cardClickHandler = (blogId: number) => {
        navigate(`/blog/${blogId}`, { replace: true });
    }

    return (
        <HandleLoadingEmptyErrorState data={blogs} isLoading={isLoading} error={error}>
            <BlogsWrapper>
                {(blogs || []).map(post => <Card
                    data-testid={`Card_${post.id}`}
                    aria-label="card containing the blog data"
                    key={post.id}
                    width="300px"
                    height="200px"
                    padding="15px"
                    backgroundcolor="#f4f4f4"
                    onClick={() => cardClickHandler(post.id)}>
                    <Header>
                        <TitleTextWrapper aria-label="blog title">
                            {post.title}
                        </TitleTextWrapper>
                    </Header>
                    <TagsContainer aria-label="blog tags listed here">
                        {post.tags.map((tag: string, index: number) => <Card
                            key={index}
                            width="70px"
                            height="25px"
                            backgroundcolor="#8fbaf0">
                            {tag}
                        </Card>)}
                    </TagsContainer>
                    <BodyContainer aria-label="blog description is here">
                        <BlogBody>{post.body.substring(0, 50)}...</BlogBody>
                    </BodyContainer>
                    <CommentsTextAndButtonWrapper aria-label="blog reactions count is here">
                        <ReactionsContainer>
                            <Image aria-label="icon to show reaction" src={chatImg}></Image>
                            <Text aria-label="reaction text here">
                                {post.reactions}
                            </Text>
                        </ReactionsContainer>
                        <Button aria-label="read more button" backgroundcolor="#4792ef">Read More</Button>
                    </CommentsTextAndButtonWrapper>
                </Card>)}
            </BlogsWrapper>
        </HandleLoadingEmptyErrorState>);
};