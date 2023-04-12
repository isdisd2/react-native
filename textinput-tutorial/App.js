import React, { useState } from "react";
import {
    StyleSheet,
    View,
    // Button,
    useColorScheme,
    Pressable,
    // TextInput,
    SafeAreaView,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
// import { FcHeadset } from "react-icons/fc"; //npm install react-icons
import { Tree as TreeGeist } from "@geist-ui/react"; //npm i @geist-ui/react
// import "antd/dist/antd.css";
import { Tree } from "antd"; //npm install antd

const styles = StyleSheet.create({
    input: {
        borderColor: "red",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});

const treeData = [
    {
        title: "Main file structure",
        key: "MainStructure",
        children: [
            {
                title: "Layouts",
                key: "layoutFolder",
                children: [
                    //child element
                    {
                        title: "MainLayout.js",
                        key: "mainlayout.js",
                    },
                ],
            },
            { title: "index.js", key: "index.js" },
        ],
    },
];

const HelloWorldApp = (props) => {
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);
    const [userError, setUserError] = useState(false);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    left={<TextInput.Icon name="email" />}
                    style={{ margin: 10 }}
                    error={userError} //the error prop will depend on our userError Hook
                />
                {/*If the user presses this button, the userError Hook's value will reset.*/}
                <Button onPress={() => setUserError((value) => !value)}>
                    Press ddd
                </Button>

                <TextInput
                    // style={styles.input}
                    placeholder="John"
                    // value="dd"
                    editable={true}
                    // keyboardType="phone-pad"
                    keyboardType="email-address"
                    secureTextEntry={true}
                    // onChangeText={(value) => setName(value)}
                    onSubmitEditing={(value) => setName(value.nativeEvent.text)}
                    left={<TextInput.Icon name="eye" />}
                    // mode="outlined"
                    activeUnderlineColor="green"
                    underlineColor="purple"
                />
                <Text>Welcome: {name}</Text>
            </View>
            <SafeAreaView>
                <TextInput
                    editable
                    placeholder="Name..."
                    id="name"
                    label="Name"
                    value={props.name}
                    onChangeText={(e) => {
                        setName(e);
                    }}
                    activeUnderlineColor="green"
                    underlineColor="purple"
                />

                <TextInput
                    editable
                    placeholder="Role..."
                    label="Role"
                    id="role"
                    value={props.role}
                    onChangeText={(e) => {
                        setRole(e);
                    }}
                    activeUnderlineColor="green"
                    underlineColor="purple"
                />
            </SafeAreaView>
            <Tree treeData={treeData} />
            <Tree checkable treeData={treeData} />
            {/* @geist-ui/react tree */}
            <TreeGeist>
                <TreeGeist.Folder name="src">
                    <TreeGeist.File name="app.js" />
                    <TreeGeist.File name="index.js" />
                    <TreeGeist.Folder name="Components">
                        <TreeGeist.File name="Layout.js" />
                    </TreeGeist.Folder>
                </TreeGeist.Folder>
                <TreeGeist.File name="package.json" />
            </TreeGeist>
        </View>
    );
};
export default HelloWorldApp;
