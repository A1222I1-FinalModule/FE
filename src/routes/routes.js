import config from '../config/index';

// Layouts
import Home from '../pages/Home';
import News from '../pages/News';
import Login from '../components/Login/index';

// Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.news,
        component: News,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
