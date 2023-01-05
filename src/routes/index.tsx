import { useRoutes } from 'react-router-dom';
import { Quote } from '../pages/Quote';

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
            path: '*',
            element: <span>404</span>
        },
    ]);
}