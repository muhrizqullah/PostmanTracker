import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screen/WelcomeScreen'
import Details from '../screen/FixedDetailedScreen'

const screens = {
     Home: {
          screen: Home,
     },

     Details: {
          screen: Details,
     },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);