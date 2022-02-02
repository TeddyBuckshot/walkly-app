import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const WalkerItem = props => {
    return (
        <View style={styles.walkerItem}>
            <TouchableOpacity onPress={props.onSelectWalker}>
                <View>
                    <View
                        style={{ ...styles.walkerRow, ...styles.walkerHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.backImage}>
                            <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                        style={{ ...styles.walkerRow, ...styles.walkerDetails }}>
                        <Text>
                            £{props.price} p/h
                        </Text>
                        <Text>{props.lengthOfWalks} minute walks</Text>
                        <Text>name: {props.name}</Text>
                        <Text>rating: {props.rating}/5</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    walkerRow: {
        flexDirection: 'row',
    },
    walkerItem: {
        height: 200,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,

    },
    walkerHeader: {
        height: '80%',

    },
    walkerDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    },
    backImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: 'white', 
        textAlign: 'center'
    }

});

export default WalkerItem;