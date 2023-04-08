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
import Flex from "./flex";
import Card from "./cardTemplate";

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
    const colorScheme = useColorScheme();
    let newch;
    const ThemeVariant = () => {
        if (colorScheme === "dark") {
            return <Text>DARK</Text>;
        } else {
            return <Text>LIGHT</Text>;
        }
    };
    return (
        <View style={styles.container}>
            <Text>{colorScheme.toUpperCase().split("").join(" - ")}</Text>
            <StatusBar style="auto" />
            <Counters />
            <Ionicons name="md-alarm" size={32} color="green" />
            <ThemeVariant />
            <MyCheckbox />
            <Card />
            <Flex />
        </View>
    );
}

function MyCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}
        >
            {checked && <Ionicons name="checkmark" size={20} color="white" />}
        </Pressable>
    );
}

function CounterButton({ count, onClick }) {
    return (
        <>
            <Button onPress={onClick} title="Click me" />
            <Text>pocet klikov: {count}</Text>
        </>
    );
}

function Counter({ startValue }) {
    const [count, setCount] = useState(startValue);

    function handleClick() {
        setCount(count + 1);
    }

    return <CounterButton count={count} onClick={handleClick} />;
}

class Counters extends Component {
    render() {
        const generateCounters = counterList.map((counter) => (
            <Text key={counter.id}>
                {counter.name} <Counter startValue={counter.startValue} />
            </Text>
        ));

        return <>{generateCounters}</>;
    }
}
