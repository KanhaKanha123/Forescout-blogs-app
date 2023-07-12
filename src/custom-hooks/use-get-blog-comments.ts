import axios from '../api/axios-api';
import { useQuery } from "react-query";
import { useAppContext } from '../store/context';
import config from '../config';

interface UserTypes {
    readonly id: number,
    readonly username: string,
};

export interface BlogSingleCommentTypes {
    readonly id: number,
    readonly body: string,
    readonly postId: number,
    readonly user: UserTypes
};

export interface BlogCommentsTypes {
    readonly comments: BlogSingleCommentTypes[];
    readonly total: number
};

export interface BlogCommentsReturnTypes {
    readonly comments: BlogCommentsTypes | undefined;
    readonly isLoadingComments: boolean,
    readonly errorComments: unknown

};

/**
 * This hooks is responsible to fetch all the comments by blogId from the api. We are using react-query for better performance
 * @params blogId
 * @returns { comments, isLoadingComments, errorComments }
 */
export const useGetBlogComments = (blogId: number): BlogCommentsReturnTypes => {

    const { skipCountComments, setTotalCountComments } = useAppContext();

    const { isLoading, data, error } = useQuery([`blog_comments_${blogId}_${skipCountComments}`], async () => {

        const { data } = await axios.get<BlogCommentsTypes>(`/posts/${blogId}/comments?limit=${config.commentsPageLimit}&skip=${skipCountComments}`);

        setTotalCountComments(data.total);

        return data;
    }
    );

    return { comments: data, isLoadingComments: isLoading, errorComments: error };
}
