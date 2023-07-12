import styled from 'styled-components';

export const BlogsAndLoadMoreWrapper = styled.div`
width:auto;
height:auto;
display: flex;
justify-content: center;
flex-flow:column;
`;

export const BlogsWrapper = styled.div`
width:auto;
height:auto;
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
margin-top: 15px;
`;

export const Header = styled.div`
width: 100%;
height: 20px;
display: flex;
align-items: start;
justify-content: space-between;

& .linkStyle{
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    color: #4792ef;
    text-decoration: none;
}
`;

export const TagsContainer = styled.div`
width:100%;
height:20px;
display: flex;
align-items: center;
gap: 10px;
`;

export const BodyContainer = styled.div`
width:100%;
display: flex;
align-items: start;
flex-flow: column;
gap:5px;
`;

export const CommentsTextAndButtonWrapper = styled.div`
width:100%;
height:50px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const CommentsWrapper = styled.section`
width:100%;
height:auto;
display: flex;
flex-flow: column;
gap:10px;
`;

export const Image = styled.img`
height:20px;
width:20px;
`;

export const TitleTextWrapper = styled.span`
font-weight:bold;
font-size:12px;
`;

export const ReactionsContainer = styled.div`
display:flex;
gap:10px
`;

export const BlogCommentWrapper = styled.div`
display:flex;
flex-flow:column;
gap:10px;
width:100%;
`;

export const UserNameWrapper = styled.div`
display:flex;
gap:10px;
`;

export const BlogCommentTextWrapper = styled.span`
font-size:15px;
`;

export const Text = styled.span`
font-size:12px;
font-weight:bold;
`;

export const AuthourText = styled.span`
font-size:12px;
font-weight:bold;
`;

export const BlogBody = styled.p`
font-size:15px;
`;

export const PaginatedItemsWrapper = styled.div`
display:flex;
gap:10px;
width:100%;
justify-content: center;
`;

export const AddNewCommentsWrapper = styled.div`
display:flex;
position: absolute;
bottom: 216px;
box-shadow: 10px -1px 8px 0px grey;
justify-content: center;
`;

