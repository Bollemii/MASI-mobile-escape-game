import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import Game from "@/models/game";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

interface NotAccessedProps {
    currentStep: number;
    game?: Game;
    backgroundImage: any;
    restartFunctions?: {handleRestart: () => void, handleContinue: () => void};
}

export default function NotAccessed(props: NotAccessedProps) {
    if (props.restartFunctions) {
        return <Restart {...props}/>
    }

    let text: string;
    if (!props.game || props.game.isFinished()) {
        text = "Vous n'avez pas de partie en cours, veuillez en commencer une nouvelle."
    } else {
        if (props.game.lastStep >= props.currentStep) {
            text = `Vous avez déjà réussi cette épreuve, veuillez reprendre à la ${props.game.lastStep+1}e étape où vous vous êtes arrêté.`
        } else if (props.game.lastStep < props.currentStep-1) {
            text = `Vous n'avez encore atteint cette épreuve, veuillez reprendre à la ${props.game.lastStep+1}e étape où vous vous êtes arrêté.`
        } else {
            text = "Il semble qu'il y ait une erreur, veuillez prendre contact avec l'administrateur : vous devriez être à la bonne étape."
        }
    }

    return (
        <ImageBackground style={styles.container} source={props.backgroundImage}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text style={styles.text}>{text}</Text>
        </ImageBackground>
    );
}

function Restart(props: NotAccessedProps) {
    if (!props.restartFunctions) {
        return null;
    }

    return (
        <ImageBackground style={styles.container} source={props.backgroundImage}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text style={styles.text}>Vous avez déjà une partie en cours, voulez-vous recommencer ?</Text>
            <View style={styles.buttonContainer}>
                <Button text="Nouvelle partie" onPress={props.restartFunctions.handleRestart} buttonStyle={styles.button}/>
                <Button text="Continuer" onPress={props.restartFunctions.handleContinue} buttonStyle={styles.button}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    text: {
        fontSize: 18,
        color: defaultStyles.colors.white,
        marginBottom: 5,
    },
    buttonContainer: {
        width: '100%',
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }
});
