import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";  
import {View, Text, TextInput, Button, StyleSheet } from "react-native";

const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={22} color={'white'} />
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;