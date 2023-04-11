import { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    useColorScheme,
    Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

class Help extends Component {
    render() {
        // const colorScheme = useColorScheme();
        // const ThemeVariant = () => {
        //     if (colorScheme === "dark") {
        //         return <Text>DARK</Text>;
        //     } else {
        //         return <Text>LIGHT</Text>;
        //     }
        // };
        return (
            <>
                {/* <Text>{colorScheme.toUpperCase().split("").join(" - ")}</Text>
                <StatusBar style="auto" />
                <Counters />
                <Ionicons name="md-alarm" size={32} color="green" />
                <ThemeVariant />
                <MyCheckbox /> */}
            </>
        );
    }
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

export default Help;
