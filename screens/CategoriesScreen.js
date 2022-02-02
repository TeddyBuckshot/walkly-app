import React from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { CATEGORIES } from "../data/dataLoader";
import HomeCategoriesGridTile from "../components/HomeCategoriesGridTile";


const CategoriesScreen = props => {

    const renderGridITem = itemData => {
        return (
            <HomeCategoriesGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoriesWalker', params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} />
        );
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridITem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Home Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;