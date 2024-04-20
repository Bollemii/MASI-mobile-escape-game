import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BatteryState, useBatteryState } from "expo-battery";
import { Camera, FlashMode } from "expo-camera";

import { routes } from "@/router/routes";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SspeechPanel";
import StepNotAccess from "@/components/StepNotAccess";
import RequestCameraPermission from "@/components/RequestCameraPermission";
import { saveLastGame } from "@/dataaccess/gameData";
import usePseudo from "@/hooks/pseudo";
import useLastGame from "@/hooks/lastGame";
import BackgroundImage from "@/components/BackgroundImage";

const data = {
    dark: {
        image: require("assets/images/piratesdelilebourbon/dark-ships-hold.png"),
        text: "Où suis-je ? Il fait noir, on dirait que je suis entouré de tonneaux. Mais attendez… j’entends des voix, je devrais aller voir s’il y a des gens là-haut. Le problème, c’est qu’on n’y voit pas grand chose ici. Ah, une lampe torche ! Mais elle est déchargée... Bon, il doit bien y avoir des piles quelque part."
    },
    light: {
        image: require("assets/images/piratesdelilebourbon/light-ships-hold.png"),
        text: "Ok, voilà qui est mieux ! Avec ma lampe allumée, je peux enfin voir où je mets les pieds. Maintenant, il est temps de sortir de cette pièce. Pas question de rester coincé ici plus longtemps."
    }
}

export default function FirstStep () {
    const navigation = useNavigation();
    const [lastGame, _] = useLastGame();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [pseudo, __] = usePseudo();
    const stateBattery = useBatteryState();

    if (!lastGame || lastGame.lastStep !== 0) {
        return (
            <StepNotAccess step={1} game={lastGame}/>
        )
    }

    if (!permission?.granted) {
        return (
            <RequestCameraPermission requestPermission={requestPermission}/>
        );
    }

    const win = () => {
        if (!lastGame) return;

        lastGame.wonStep();
        saveLastGame(lastGame).then(() => {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(routes.game[2]);
        });
    }

    return (
        <View>
            {stateBattery === BatteryState.CHARGING && (
                <Camera
                    flashMode={FlashMode.torch}
                    style={styles.camera}
                />
            )}
            <BackButton text="Quitter" pageRedirect={routes.home}/>
            <BackgroundImage
                source={stateBattery === BatteryState.CHARGING ? data.light.image : data.dark.image}
            />
            {stateBattery === BatteryState.CHARGING && (
                <Pressable onPress={win} style={styles.winPressable}/>
            )}
            <SpeechPanel 
                speaker={pseudo}
                text={stateBattery === BatteryState.CHARGING ? data.light.text : data.dark.text}
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
        // Hidden camera but it still needs to be displayed to work
        width: 1,
        height: 1,
        // Positioned absolute to be visually hidden
        position: 'absolute',
    },
    winPressable: {
        // Transparent pressable on the exit
        position: 'absolute',
        top: 250,
        left: 130,
        right: 130,
        bottom: 400,
    },
});
