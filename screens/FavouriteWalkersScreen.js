import React from "react";
import {View, Text, TextInput, Button, StyleSheet } from "react-native";

const FavouriteWalkersScreen = props => {
    return (<View style={styles.screen}>
        <Text>
            Favourite Walkers Screen
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

export default FavouriteWalkersScreen;