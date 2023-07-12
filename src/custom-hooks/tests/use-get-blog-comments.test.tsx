import { renderHook } from "@testing-library/react";
import { useGetBlogComments } from "../use-get-blog-comments";

//mock custom hook response
jest.mock('../../store/context', () => ({
    useAppContext: () => ({
        skipCountComments: 10,
        setTotalCountComments: jest.fn()
    })
}));

//mock custom hook response
jest.mock('react-query', () => ({
    useQuery: () => ({
        isLoading: false,
        data: {
            comments: [{}], //TODO
            total: 10
        },
        error: null
    })
}));

describe("useGetBlogComments", () => {
    test("should render the comments and total count", () => {
        const { result } = renderHook(useGetBlogComments);

        expect(result.current.comments?.comments.length).toBe(1);

        expect(result.current.comments?.total).toBe(10);
    });
})