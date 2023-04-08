import { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
} from "react-native";
import "../App.css";

class Menu extends Component {
    render() {
        const { links } = this.props;
        const generateItems = links.map((item) => {
            return <MenuItem item={item} />;
        });
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        margin: "5px",
                    }}
                >
                    {generateItems}
                </div>
            </>
        );
    }
}

function MenuItem({ item }) {
    return (
        <div
            style={{
                margin: "10px 5px",
                padding: "5px 15px",
                backgroundColor: "#ad7",
            }}
            key={item.name}
        >
            {item.name}
        </div>
    );
}

export default Menu;
