import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesWalkerScreen from '../screens/CategoriesWalkerScreen';
import WalkerPageScreen from '../screens/WalkerPageScreen';
import Colors from '../constants/Colors';

const HomeNavigator = createStackNavigator({
    Categories: { screen: CategoriesScreen,},
    CategoriesWalker: {screen: CategoriesWalkerScreen,},
    WalkerPage: WalkerPageScreen,
}, {
    defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
    }
});

export default createAppContainer(HomeNavigator);