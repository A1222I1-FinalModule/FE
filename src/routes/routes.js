import config from '~/config';

// Layouts
import Home from '~/pages/Home';
import News from '~/pages/News';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
