import { useRoutes } from 'react-router-dom';
import { AuthComponent } from '../Contexts/AuthComponent';
import { Plans } from '../pages/Plans';
import { Quote } from '../pages/Quote';
import { Transfers } from '../pages/Transfers';

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
            path: '/transfers',
            element: <AuthComponent><Transfers /></AuthComponent>
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