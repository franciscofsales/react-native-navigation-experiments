import {
  createRouter
} from '@exponent/ex-navigation';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
}));

export default Router;
