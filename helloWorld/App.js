import React from "react";
import {     StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
    TextInput,
    SafeAreaView,} from "react-native";

const HelloWorldApp = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SafeAreaView>
                        <TextInput
                            editable
                            placeholder="Name..."
                            id="name"
                            label="Name"
                            value={props.name}
                            onChangeText={(e) => {
                                setName(e.target.value);
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
                                setRole(e.target.value);
                            }}
                            activeUnderlineColor="green"
                            underlineColor="purple"
                        />
                    </SafeAreaView>
        </View>
    );
};
export default HelloWorldApp;
