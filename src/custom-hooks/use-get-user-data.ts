import axios from '../api/axios-api';
import { useQuery } from "react-query";

export interface UseGetUserDataTypes {
    readonly id: number,
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number,
};

export interface UseGetUserDataReturnTypes {
    readonly userData: UseGetUserDataTypes | null | undefined,
    readonly isLoading: boolean,
    readonly error: unknown
};

/**
 * This hooks is responsible to fetch user data from the api. We are using react-query for better performance
 * @params userId
 * @returns { userData, isLoading, error }
 */
export const useGetUserData = (userId: number): UseGetUserDataReturnTypes => {

    const { isLoading, data, error } = useQuery([`user${userId}`], async () => {

        if (userId) {
            const { data } = await axios.get<UseGetUserDataTypes>(`/users/${userId}`);
            return data;
        }

        return null;
    }
    );

    return { userData: data, isLoading, error };
}
