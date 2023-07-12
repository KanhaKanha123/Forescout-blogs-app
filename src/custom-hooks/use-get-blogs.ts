import axios from '../api/axios-api';
import { useQuery } from "react-query";
import { useAppContext } from '../store/context';
import config from '../config';

interface BlogsListTypes {
    readonly body: string;
    readonly id: number;
    readonly reactions: number;
    readonly tags: string[];
    readonly title: string;
    readonly userId: number;
}

interface BlogsListReturnTypes {
    readonly blogs: BlogsListTypes[] | undefined,
    readonly isLoading: boolean,
    readonly error: unknown

}

/**
 * This hooks is responsible to fetch all the blogs on the base of pagination from the api. We are using react-query for better performance
 * @returns { blogs, isLoading, error }
 */
export const useGetBlogs = (): BlogsListReturnTypes => {

    const {
        skipCount,
        setTotalCount,
        searchTerm } = useAppContext();

    const { isLoading, data, error } = useQuery<BlogsListTypes[] | undefined>([`blogs_${searchTerm}_${skipCount}`], async () => {

        const { data } = await axios.get(`/posts/search?q=${searchTerm}&limit=${config.blogsPageLimit}&skip=${skipCount}`);

        setTotalCount(data.total);

        return data.posts;
    }
    );

    return { blogs: data, isLoading, error };
}