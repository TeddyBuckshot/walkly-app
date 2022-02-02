import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from "react-native";

const HomeCategoriesGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 8,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,

        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        textAlign: 'right'
    }
});

export default HomeCategoriesGridTile;