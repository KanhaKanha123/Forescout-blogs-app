import { renderHook } from "@testing-library/react";
import { useGetUserData } from "../use-get-user-data";

//mock custom hook response
jest.mock('react-query', () => ({
    useQuery: () => ({
        isLoading: false,
        data: {
            id: 1,
            firstName: 'test',
            lastName: 'test name',
            age: 30,
        },
        error: null
    })
}));

describe("useGetUserData", () => {
    test("should render the user data", () => {
        const { result } = renderHook(useGetUserData);

        expect(result.current.userData?.firstName).toBe('test');

        expect(result.current.userData?.age).toBe(30);
    });
})