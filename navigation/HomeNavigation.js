import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesWalkerScreen from '../screens/CategoriesWalkerScreen';
import WalkerPageScreen from '../screens/WalkerPageScreen';
import Colors from '../constants/Colors';
import FavouriteWalkersScreen from '../screens/FavouriteWalkersScreen';

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

const HomeFavTabNav = createBottomTabNavigator();

function HomeTabs() {
    return (
        <NavigationContainer>
            <HomeFavTabNav.Navigator>
                <HomeFavTabNav.Screen name='HomeCategories' component={HomeNavigator} />
                <HomeFavTabNav.Screen name='Favourites' component={FavouriteWalkersScreen} />
            </HomeFavTabNav.Navigator>
        </NavigationContainer>
    )
}

export default createAppContainer(HomeNavigator);