import { AboutScreen } from "../pages/AboutScreen";
import { HomeScreen } from "../pages/HomeScreen";

const routes = [
    { 
      path: '/', 
      name: 'Home', 
      component: HomeScreen
    },
    { 
      path: '/about', 
      name: 'About', 
      component: AboutScreen
    },
];

export default routes;