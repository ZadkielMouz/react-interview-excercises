import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PublishinPage } from '../pages/PublishinPage';
import { Post } from '../components/Post';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublishinPage />
    },
    {
        path: '/posts/:postId',
        element: <Post />
    }
])

export const Router = () => {
    return <RouterProvider router={ router } />
}