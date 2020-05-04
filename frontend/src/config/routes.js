import LayoutAdmin from '../layouts/LayoutAdmin';
import AdminHome from '../pages/admin';
import AdminSigIn from '../pages/admin/SignIn';
import LayoutBasic from '../layouts/LayoutBasic';
import BasicHome from '../pages/Home';
import BasicContact from '../pages/Contact';
import Error404 from '../pages/Error404';

const routes = [
  {
    path: '/admin',
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: '/admin',
        exact: true,
        component: AdminHome,
      },
      {
        path: '/admin/login',
        exact: true,
        component: AdminSigIn,
      },
      {
        component: Error404,
        path: '/admin/*',
      },
    ],
  },
  {
    path: '/',
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: '/',
        exact: true,
        component: BasicHome,
      },
      {
        path: '/contact',
        exact: true,
        component: BasicContact,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
