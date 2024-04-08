import { StyleSheet, View } from "react-native";

import BackButton from "../components/BackButton";
import SpeechPanel from "../components/SpeechPanel";

export default function QrScan() {
    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect="Home"/>
            <SpeechPanel speaker="Capitaine" text="Je suis ici pour vous tuer !"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
