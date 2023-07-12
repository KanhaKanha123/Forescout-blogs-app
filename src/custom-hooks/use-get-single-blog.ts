import axios from '../api/axios-api';
import { useQuery } from "react-query";

export interface BlogTypes {
    readonly body: string;
    readonly id: number;
    readonly reactions: number;
    readonly tags: string[];
    readonly title: string;
    readonly userId: number;
};

export interface BlogReturnTypes {
    readonly blog: BlogTypes | undefined;
    readonly isLoading: boolean;
    readonly error: unknown;
};

/**
 * This hooks is responsible to fetch single blog from the api. We are using react-query for better performance
 * @returns { blog, isLoading, error }
 */
export const useGetSingleBlog = (blogId: string): BlogReturnTypes => {

    const { isLoading, data, error } = useQuery([`blog${blogId}`], async () => {

        const { data } = await axios.get<BlogTypes>(`/posts/${blogId}`);

        return data;
    }
    );

    return { blog: data, isLoading, error };
}
