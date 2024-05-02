import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BatteryState, useBatteryState } from "expo-battery";
import { Camera, FlashMode } from "expo-camera";

import { routes } from "@/router/routes";
import NotAccessed from "@/screens/NotAccessed";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";
import NextButton from "@/components/NextButton";
import { saveLastGame } from "@/dataaccess/gameData";
import usePseudo from "@/hooks/usePseudo";
import useLastGame from "@/hooks/useLastGame";

const data = {
    notAccessedImage: require('assets/images/piratesdelilebourbon/boat.jpg'),
    before: {
        image: require("assets/images/piratesdelilebourbon/dark-ships-hold.png"),
        text: "Où suis-je ? Il fait noir, on dirait que je suis entouré de tonneaux. Mais attendez… j’entends des voix, je devrais aller voir s’il y a des gens là-haut. Le problème, c’est qu’on n’y voit pas grand chose ici. Ah, une lampe torche ! Mais elle est déchargée... Bon, il doit bien y avoir un moyen de la recharger."
    },
    after: {
        image: require("assets/images/piratesdelilebourbon/light-ships-hold.png"),
        text: "Ok, voilà qui est mieux ! Avec ma lampe allumée, je peux enfin voir où je mets les pieds. Maintenant, il est temps de sortir de cette pièce. Pas question de rester coincé ici plus longtemps."
    },
};

export default function FirstStep () {
    const navigation = useNavigation();
    const [lastGame, _] = useLastGame();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [pseudo, __] = usePseudo();
    const stateBattery = useBatteryState();

    if (!lastGame || lastGame.lastStep !== 0) {
        // We use the NotAccessed as a component because LastGame might not be loaded yet on first render
        // A navigation take only first render into account
        return <NotAccessed currentStep={1} game={lastGame} backgroundImage={data.notAccessedImage}/>;
    }

    if (!permission?.granted) {
        requestPermission();
    }

    const handleNext = () => {
        if (!lastGame) return;

        lastGame.wonStep();
        saveLastGame(lastGame).then(() => {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(routes.game[2]);
        });
    }

    if (stateBattery !== BatteryState.CHARGING) {
        return (
            <ImageBackground source={data.before.image} style={styles.container}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <SpeechPanel 
                    speaker={pseudo}
                    text={data.before.text}
                />
            </ImageBackground>
        );
    } else {
        return (
            <ImageBackground source={data.after.image} style={styles.container}>
                <Camera
                    flashMode={FlashMode.torch}
                    style={styles.camera}
                />
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <SpeechPanel 
                    speaker={pseudo}
                    text={data.after.text}
                />
                <NextButton text="Épreuve suivante" onPress={handleNext} theme="white"/>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    camera: {
        // Hidden camera but it still needs to be displayed to work
        width: 1,
        height: 1,
        // Positioned absolute to be visually hidden
        position: 'absolute',
    },
});
