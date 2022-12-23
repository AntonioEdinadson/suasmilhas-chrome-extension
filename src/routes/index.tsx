import { useRoutes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Quote } from '../pages/Quote';
import { Register } from '../pages/Register';

export const RoutesList = () => {
    return useRoutes([
        {
            path: '/',
            element: <Quote />
        },

        {
            path: '/quote',
            element: <Quote />
        },

        {
            path: '/register',
            element: <Register />
        },

        {
            path: '/login',
            element: <Login />
        },
    ]);
}