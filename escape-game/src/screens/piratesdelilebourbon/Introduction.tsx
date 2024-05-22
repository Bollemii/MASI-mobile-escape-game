import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import Game from "@/models/game";
import BackButton from "@/components/BackButton";
import NextButton from "@/components/NextButton";
import { saveLastGame } from "@/dataaccess/gameData";
import useLastGame from "@/hooks/useLastGame";
import NotAccessed from "../NotAccessed";

const data = {
    image: require('assets/images/piratesdelilebourbon/boat.jpg'),
    texts : [
        "Bienvenue à bord, moussaillon !",
        "Vous voilà plongé dans l’univers impitoyable des pirates, à bord du navire “Le Victorieux”.",
        "Votre mission ? Survivre, résoudre des énigmes et échapper à ce monde de corsaires et de trésors maudits.",
        "Prêt à lever l'ancre et à vous aventurer dans l'inconnu ?",
        "Que votre esprit d'aventure vous guide vers de nouveaux horizons !",
        "Avant de commencer votre périple à travers l'univers des pirates, veuillez noter que cette aventure nécessite l'utilisation des fonctionnalités de votre téléphone."
    ],
};

export default function Introduction() {
    const navigation = useNavigation();
    const [lastGame, setLastGame] = useLastGame();

    const handleContinue = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(routes.game[lastGame.lastStep + 1]);
    };
    const handleRestart = () => {
        saveLastGame();
        setLastGame(undefined);
    };
    const handleStart = () => {
        const game = new Game();
        
        saveLastGame(game).then(() => {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(routes.game[1]);
        });
    };

    if (!!lastGame && lastGame.isInProgress()) {
        return <NotAccessed currentStep={0} game={lastGame} backgroundImage={data.image} restartFunctions={{handleContinue, handleRestart}}/>;
    } else {
        return (
            <ImageBackground source={data.image} style={styles.container}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <Text style={styles.title}>{"Pirates de\nl'Ile Bourbon"}</Text>
                <View>
                    <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 10, fontSize: 20}]}>{data.texts[0]}</Text>
                    <Text style={styles.text}>{data.texts[1]}</Text>
                    <Text style={styles.text}>{data.texts[2]}</Text>
                    <Text style={styles.text}>{data.texts[3]}</Text>
                    <Text style={styles.text}>{data.texts[4]}</Text>
                    <Text style={[styles.text, {marginTop: 25}]}>{data.texts[5]}</Text>
                </View>
                <NextButton text="Commencer" onPress={handleStart} theme="blue"/>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    title: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 40,
        color: defaultStyles.colors.white,
        marginBottom: 22,
    },
    text: {
        fontSize: 18,
        color: defaultStyles.colors.white,
        marginBottom: 5,
    },
});
