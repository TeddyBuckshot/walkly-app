import React from "react";
import {View, Text, TextInput, Button, StyleSheet } from "react-native";

const CategoriesScreen = props => {
    return (<View style={styles.screen}>
        <Text>
            Categories Screen
        </Text>
    </View>)
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;

// import { AppLoading } from 'expo';

// expo install expo-app-loading
// import AppLoading from 'expo-app-loading';

// In the next lecture, we'll add the AppLoading component.

// We will do this by importing it like this:

// import { AppLoading } from 'expo';
// This might fail for you - depending on the version of Expo you're using to follow along.

// If it does fail, try this alternative way of adding it:

// expo install expo-app-loading
// import AppLoading from 'expo-app-loading';
// Also add the following prop to the <AppLoading /> component (in your JSX code):

// onError={(err) => console.log(err)}
// In the end, you should have:

// <AppLoading
//     startAsync={fetchFonts}
//     onFinish={() => setFontLoaded(true)}
//     onError={(err) => console.log(err)}
// />




// So when we use the StackNavigator (= next lecture), run

// npm install --save react-navigation-stack
// before you start using it (with v3 and lower, it was part of react-navigation itself).

// Also add this import in the file where you are using createStackNavigator:

// import { createStackNavigator } from 'react-navigation-stack';
// Same for TabsNavigator (used a little bit later in this module):

// npm install --save react-navigation-tabs
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// And also for DrawerNavigator (also used later in this module):

// npm install --save react-navigation-drawer
// import { createDrawerNavigator } from 'react-navigation-drawer';