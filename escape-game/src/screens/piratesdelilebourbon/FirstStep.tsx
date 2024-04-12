import { Image, StyleSheet, Text, View } from "react-native";
import { BatteryState, useBatteryState } from "expo-battery";
import { Camera, FlashMode } from "expo-camera";

import BackButton from "../../components/BackButton";
import SpeechPanel from "../../components/SpeechPanel";
import Button from "../../components/Button";
import usePseudo from "../../hooks/pseudo";

const data = {
    dark: {
        image: require("../../../assets/images/piratesdelilebourbon/dark-ships-hold.png"),
        text: "Où suis-je ? La noirceur m’enveloppe, et les tonneaux de rhum semblent se moquer de moi. Mais attendez… des voix étouffées viennent du pont. Je devrais absolument aller voir s’il y a des gens là-haut. Le problème, c’est qu’on y voit pas grand chose ici."
    },
    light: {
        image: require("../../../assets/images/piratesdelilebourbon/light-ships-hold.png"),
        text: "Ok, voilà qui est mieux ! Avec ma lampe allumée, je peux enfin voir où je mets les pieds. Maintenant, il est temps de sortir de cette pièce. Pas question de rester coincé ici plus longtemps."
    }
}

export default function FirstStep () {
    const [pseudo, _] = usePseudo();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const stateBattery = useBatteryState();

    if (!permission?.granted) {
        return (
            <View style={styles.container}>
                <BackButton text="Retour" pageRedirect="Home"/>
                <Text style={{marginBottom: 30}}>"Veuillez autoriser l'accès à la caméra pour continuer"</Text>
                <Button onPress={requestPermission} text="Autoriser la caméra"/>
            </View>
        );
    }

    return (
        <View>
            <Image
                source={stateBattery === BatteryState.CHARGING ? data.light.image : data.dark.image}
                style={styles.image}
            />
            <BackButton text="Quitter" pageRedirect="Home"/>
            <SpeechPanel 
                speaker={pseudo}
                text={stateBattery === BatteryState.CHARGING ? data.light.text : data.dark.text}
            />
            <Camera
                flashMode={stateBattery === BatteryState.CHARGING ? FlashMode.torch : FlashMode.off}
                style={styles.camera}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: 1,
        height: 1,
        position: 'absolute',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
