import { createContext, FC, ReactElement, useContext, useState } from 'react';

interface ChildrenProps {
    children: React.ReactNode
}

// Create app context here
export const BlogsContext = createContext<any | null>(null);

/**
 * This component is responsible to wrap the app and share the state between compnents.
 * @returns ReactElement
 */
const ContextProvider: FC<ChildrenProps> = ({ children }): ReactElement => {

    const [skipCount, setSkipCount] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    const [skipCountComments, setSkipCountComments] = useState<number>(0);
    const [totalCountComments, setTotalCountComments] = useState<number>(0);

    const [searchTerm, setSearchTerm] = useState<string>('');

    return <BlogsContext.Provider
        value={{
            skipCount,
            setSkipCount,
            totalCount,
            setTotalCount,
            skipCountComments,
            setSkipCountComments,
            totalCountComments,
            setTotalCountComments,
            searchTerm,
            setSearchTerm
        }}>
        {children}
    </BlogsContext.Provider>
}

//hook to get provider values and make them, available all over the app.
export const useAppContext = () => useContext(BlogsContext);

export default ContextProvider;