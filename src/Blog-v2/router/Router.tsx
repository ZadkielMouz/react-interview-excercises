import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BlogPage, FormPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <BlogPage />
    },
    {
        path: '/newPost',
        element: <FormPage type="new" />
    },
    {
        path: '/edit/:postId',
        element: <FormPage type="edit" />,
    }
]);


export const Router = () => {
    return (
        <RouterProvider router={ router } />
    )
}
