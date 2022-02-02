import React from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, WALKERS } from "../data/dataLoader";
import WalkerItem from "../components/WalkerItem";


const CategoriesWalkerScreen = props => {

    const renderWalkerItem = itemData => {
        return (
            <WalkerItem 
            title={itemData.item.title} 
            image={itemData.item.imageUrl}
            price={itemData.item.price}
            lengthOfWalks={itemData.item.lengthOfWalks}
            name={itemData.item.name}
            rating ={itemData.item.rating}
            onSelectWalker={() => {
                props.navigation.navigate({routeName: 'WalkerPage', params: {
                    walkerID: itemData.item.id
                }})
            }}
            
            />
        )
    }

    const catID = props.navigation.getParam('categoryId');

    const displayedWalkers = WALKERS.filter(
        walker => walker.categoryIds.indexOf(catID) >= 0
    );

    const selectedCategory = CATEGORIES.find(category => category.id === catID);

    return (
        <View style={styles.screen}>

            <FlatList data={displayedWalkers} keyExtractor={(item, index) => item.id} renderItem={renderWalkerItem} style={{width: '100%'}} />
            {/* <Text>
                Walker Categories Screen
            </Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='view individual walker' onPress={() => {
                props.navigation.navigate({ routeName: 'WalkerPage' });
            }} />
            <Button title='back' onPress={() => {
                props.navigation.goBack();
                // props.navigation.pop();
            }} /> */}
        </View>)
};

CategoriesWalkerScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === catID);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default CategoriesWalkerScreen;