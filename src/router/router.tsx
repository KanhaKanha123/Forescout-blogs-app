import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../error-boundry/error-boundary';
import { Home } from '../pages';
import { BlogDetailsPage } from '../pages';
export const router = createBrowserRouter([
    {
        element: <ErrorBoundary><Home /></ErrorBoundary>,
        path: ''
    },
    {
        element: <ErrorBoundary><BlogDetailsPage /></ErrorBoundary>,
        path: '/blog/:blogId'
    }
])