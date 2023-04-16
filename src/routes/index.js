//Layouts
import { DefaultLayout, HeaderOnly } from '../layouts';

import configs from '../config';

//Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../layouts/components/Search';
import Live from '../pages/Live';

//Public routes
const publicRoutes = [
    { path: configs.routes.home, component: Home, layout: DefaultLayout },
    { path: configs.routes.following, component: Following, layout: DefaultLayout },
    { path: configs.routes.profile, component: Profile, layout: DefaultLayout  },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
    { path: configs.routes.search, component: Search, layout: null },
    { path: configs.routes.live, component: Live, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
