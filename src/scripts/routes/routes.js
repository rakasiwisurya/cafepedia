import CafeCatalogue from '../views/pages/cafe-catalogue';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': CafeCatalogue, // default page
  '/cafe-catalogue': CafeCatalogue,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;