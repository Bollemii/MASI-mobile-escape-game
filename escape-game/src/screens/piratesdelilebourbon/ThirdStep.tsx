import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { routes } from "@/router/routes";
import BackButton from "@/components/BackButton";
import NextButton from "@/components/NextButton";
import SpeechPanel from "@/components/SpeechPanel";
import { saveLastGame } from "@/dataaccess/gameData";
import useLastGame from "@/hooks/lastGame";
import usePedometer from "@/hooks/pedometer";
import NotAccessed from "../NotAccessed";

const data = {
    step: 20,
    notAccessedImage: require('assets/images/piratesdelilebourbon/boat.jpg'),
    before: {
        image: require("assets/images/piratesdelilebourbon/boat-deck-captain.png"),
        text: "Bravo, moussaillon ! Ton courage et ta bravoure ont été décisifs dans notre victoire aujourd'hui. Viens avec moi dans ma cabine, elle se trouve à 20 pas d'ici. Nous allons célébrer cette victoire comme il se doit, avec un bon rhum et des histoires de mer à partager."
    },
    after: {
        image: require("assets/images/piratesdelilebourbon/captain-cabin.png"),
        text: "Ah, voilà notre héros ! Bienvenue dans mon humble demeure, moussaillon. Prends place, prends place. Tu as bien mérité un moment de repos après cette bataille acharnée. À notre victoire ! Et à l'esprit indomptable de l'équipage du 'Victorieux' !"
    }
}

export default function ThirdStep() {
    const navigation = useNavigation();
    const step = usePedometer();
    const [lastGame, _] = useLastGame();

    if (!lastGame || lastGame.lastStep !== 2) {
        return (
            <NotAccessed currentStep={3} game={lastGame} backgroundImage={data.notAccessedImage}/>
        )
    }

    const handleNext = () => {
        if (!lastGame) return;

        lastGame.wonStep();
        saveLastGame(lastGame).then(() => {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(routes.end);
        });
    }

    if (step < data.step) {
        return (
            <ImageBackground source={data.before.image} style={styles.container}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <SpeechPanel text={data.before.text} speaker="Capitaine"/>
            </ImageBackground>
        );
    } else {
        return (
            <ImageBackground source={data.after.image} style={styles.container}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <SpeechPanel text={data.after.text} speaker="Capitaine"/>
                <NextButton text="Terminer" onPress={handleNext} theme="white"/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
