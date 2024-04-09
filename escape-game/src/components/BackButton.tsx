import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { constants } from "../constants";
import Button from "./Button";

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
        <Button text={`< ${props.text}`} onPress={handlePress} buttonStyle={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        left: 20,
        height: 30,
        width: 80,
        alignItems: 'center',
        backgroundColor: constants.colors.blue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
    },
});
