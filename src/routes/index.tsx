import { useRoutes } from 'react-router-dom';
import { AuthComponent } from '../Contexts/AuthComponent';
import { Plans } from '../pages/Plans';
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
            path: '/plans',
            element: <AuthComponent><Plans /></AuthComponent>
        },
               
        {
            path: '*',
            element: <span>404</span>
        },
    ]);
}