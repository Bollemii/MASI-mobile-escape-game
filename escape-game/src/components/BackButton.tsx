import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { global } from "../global";

interface BackButtonProps {
    text: string;
    pageRedirect: string;
}

export default function BackButton(props: BackButtonProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(props.pageRedirect);
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Text style={styles.text}>&lsaquo; {props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: global.colors.blue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
    },
    text: {
        color: global.colors.white,
    }
});
