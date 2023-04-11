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
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        const { links } = this.props;
        const generateItems = links.map((item) => {
            return <MenuItem key={item.name} item={item} />;
        });
        return (
            <>
                <div className="navigation">{generateItems}</div>
            </>
        );
    }
}

function MenuItem({ item }) {
    return (
        <NavLink
            style={{
                margin: "10px 5px",
                padding: "5px 15px",
                backgroundColor: "#1d7",
            }}
            key={item.name}
            to={item.link}
            className={({isActive})=> {
                
            }}
        >
            {item.name}
        </NavLink>
    );
}

export default Menu;
