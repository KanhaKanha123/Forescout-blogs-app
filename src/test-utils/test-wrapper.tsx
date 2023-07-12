import ContextProvider from '../store/context';
import { QueryClientProvider } from "react-query";
import { FC, ReactElement } from 'react';
import { client } from '../react-query/query-client';
import { BrowserRouter as Router } from 'react-router-dom';

interface TestWrapperProps {
    children: React.ReactNode
}

/**
 * This component is responsible to wrap the tests with all the important wrappers so all the time in all tests we don't have to repeat.
 * @returns ReactElement
 */
export const TestWrapper: FC<TestWrapperProps> = ({ children }): ReactElement => (
    <QueryClientProvider client={client}>
        <ContextProvider>
            <Router>
                {children}
            </Router>
        </ContextProvider>
    </QueryClientProvider>);