import { renderHook } from "@testing-library/react";
import { useGetSingleBlog } from "../use-get-single-blog";

//mock custom hook response
jest.mock('react-query', () => ({
    useQuery: () => ({
        isLoading: false,
        data: { body: 'test', id: 1, title: 'test title' },
        error: null
    })
}));

describe("useGetSingleBlog", () => {
    test("should render the blog data correctly", () => {
        const { result } = renderHook(useGetSingleBlog);

        expect(result.current.blog?.body).toBe('test');

        expect(result.current.blog?.title).toBe('test title');
    });
})