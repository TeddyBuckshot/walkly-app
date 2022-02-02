import React from "react";
import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import { WALKERS } from "../data/dataLoader";

const WalkerPageScreen = props => {

    const walkerID = props.navigation.getParam('walkerID');

    const selectedWalkers = WALKERS.find(walker => walker.id === walkerID);
     
    return (<View style={styles.screen}>
        <Text>{selectedWalkers.title}</Text>
        <Button  title="return to Home" onPress={() => {
            props.navigation.popToTop();
        }}/>
    </View>)
};

WalkerPageScreen.navigationOptions = (navigationData) => {
    const walkerID = navigationData.navigation.getParam('walkerID');
    const selectedWalkers = WALKERS.find(walker => walker.id === walkerID);
    return {
        headerTitle: selectedWalkers.title,
        headerRight: () => <Text>Fav</Text>
    };

}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WalkerPageScreen;