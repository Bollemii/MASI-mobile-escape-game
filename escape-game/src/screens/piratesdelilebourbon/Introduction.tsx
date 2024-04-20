import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { constants } from "@/constants";
import Game from "@/models/game";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import { saveLastGame } from "@/dataaccess/gameData";
import useLastGame from "@/hooks/lastGame";

const data = {
    texts : [
        "Bienvenue à bord, moussaillon !",
        "Vous voilà plongé dans l’univers impitoyable des pirates, à bord du navire “Le Victorieux”.",
        "Votre mission ? Survivre, résoudre des énigmes et échapper à ce monde de corsaires et de trésors maudits.",
        "Prêt à lever l'ancre et à vous aventurer dans l'inconnu ?",
        "Que votre esprit d'aventure vous guide vers de nouveaux horizons !",
        "Avant de commencer votre périple à travers l'univers des pirates, veuillez noter que cette aventure nécessite l'utilisation des fonctionnalités spécifiques de votre téléphone."
    ]
}

export default function Introduction() {
    const navigation = useNavigation();
    const [lastGame, setLastGame] = useLastGame();

    const handleContinue = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(constants.screens.game[lastGame.lastStep + 1]);
    }
    const handleNewGame = () => {
        saveLastGame();
        setLastGame(undefined);
    }
    function handleStart() {
        const game = new Game();
        
        saveLastGame(game).then(() => {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(constants.screens.game[1]);
        });
    }

    return (
        <>
        {
            !!lastGame && lastGame.isInProgress() ?
            <View style={[styles.container, {marginHorizontal: 20}]}>
                <BackButton text="Retour" pageRedirect="Home"/>
                <Text>"Vous avez déjà une partie en cours, voulez-vous recommencer ?"</Text>
                <View style={styles.alreadyStarted}>
                    <Button text="Continuer" onPress={handleContinue}/>
                    <Button text="Nouvelle partie" onPress={handleNewGame}/>
                </View>
            </View>
            :
            <View style={styles.container}>
                <BackButton text="Quitter" pageRedirect="Home"/>
                <Text style={styles.title}>Pirates de l'Ile Bourbon</Text>
                <View style={{marginHorizontal: 20}}>
                    <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 10}]}>{data.texts[0]}</Text>
                    <Text style={styles.text}>{data.texts[1]}</Text>
                    <Text style={styles.text}>{data.texts[2]}</Text>
                    <Text style={styles.text}>{data.texts[3]}</Text>
                    <Text style={styles.text}>{data.texts[4]}</Text>
                    <Text style={[styles.text, {marginTop: 50}]}>{data.texts[5]}</Text>
                </View>
                <Button text="Commencer" onPress={handleStart} buttonStyle={styles.button}/>
            </View>
        }
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        marginBottom: 50,
    },
    text: {
        textAlign: 'justify',
        marginBottom: 5,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    alreadyStarted: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: 30,
    },
});
