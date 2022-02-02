import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { WALKERS } from "../data/dataLoader";
import CustomHeaderButton from "../components/CustomHeaderButton";


const WalkerPageScreen = props => {

    const walkerID = props.navigation.getParam('walkerID');
    const selectedWalkers = WALKERS.find(walker => walker.id === walkerID);

    return (<View style={styles.screen}>
        <Text>{selectedWalkers.title}</Text>
        <Button title="return to Home" onPress={() => {
            props.navigation.popToTop();
        }} />
    </View>)
};

WalkerPageScreen.navigationOptions = (navigationData) => {

    const walkerID = navigationData.navigation.getParam('walkerID');
    const selectedWalkers = WALKERS.find(walker => walker.id === walkerID);

    return {
        headerTitle: selectedWalkers.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title={'add to favourites'}
                    iconName="ios-star-outline"
                    onPress={() => {
                        console.log('marked as a fav')
                    }} />
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WalkerPageScreen;