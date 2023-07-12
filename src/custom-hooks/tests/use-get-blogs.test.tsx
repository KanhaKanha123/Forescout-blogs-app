import { renderHook } from "@testing-library/react";
import { useGetBlogs } from "../use-get-blogs";

//mock custom hook response
jest.mock('../../store/context', () => ({
    useAppContext: () => ({
        skipCount: 10,
        setTotalCount: jest.fn()
    })
}));

//mock custom hook response
jest.mock('react-query', () => ({
    useQuery: () => ({
        isLoading: false,
        data: [{ body: 'test', id: 1, title: 'test title' }],
        error: null
    })
}));

describe("useGetBlogs", () => {
    test("should render the blogs count correctly", () => {
        const { result } = renderHook(useGetBlogs);

        expect(result.current.blogs?.length).toBe(1);
    });
})