import { StyleSheet, Text, View } from "react-native";

import { routes } from "@/router/routes";
import BackButton from "./BackButton";
import Button from "./Button";

interface RequestPermissionProps {
    requestPermission: () => void;
}

export default function RequestCameraPermission(props: RequestPermissionProps) {
    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text style={{marginBottom: 30}}>"Veuillez autoriser l'accès à la caméra pour continuer"</Text>
            <Button onPress={props.requestPermission} text="Autoriser la caméra"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
