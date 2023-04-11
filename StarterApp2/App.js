import { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Flex from "./src/flex";
import Card from "./src/cardTemplate";
import RouteMainApp from "./src/routeMainApp";
import Emploees from "./src/emploees";
import Menu from "./src/menu";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
    },
    checkboxBase: {
        width: 32,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "coral",
        backgroundColor: "transparent",
    },
    checkboxChecked: {
        backgroundColor: "coral",
    },
});

const counterList = [
    {
        id: 3,
        name: "C3",
        startValue: 3,
    },
];

export default function App() {

    return (
        <>
            <View style={styles.container}>
                <RouteMainApp>
                <Menu
                    links={[
                        { name: "Flex", link: "flex" },
                        { name: "Card", link: "card" },
                        { name: "Help", link: "help" },
                    ]}
                />
                <Emploees />
                </RouteMainApp>
            </View>
        </>
    );
}
