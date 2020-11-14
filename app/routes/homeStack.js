import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/WelcomeScreen'
import Details from '../screens/FixedDetailedScreen'

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