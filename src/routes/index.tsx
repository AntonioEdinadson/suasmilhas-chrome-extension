import { useRoutes } from 'react-router-dom';
import { AuthComponent } from '../Contexts/AuthComponent';
import { Quote } from '../pages/Quote';

export const RoutesList = () => {
    return useRoutes([
        {
            path: '/',
            element: <AuthComponent><Quote /></AuthComponent>
        },

        {
            path: '/quote',
            element: <AuthComponent><Quote /></AuthComponent>
        },

        {
            path: '*',
            element: <span>404</span>
        },
    ]);
}