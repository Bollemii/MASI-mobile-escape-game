import { StyleSheet, Text, View } from "react-native";

import { routes } from "@/router/routes";
import Game from "@/models/game";
import BackButton from "@/components/BackButton";

interface NotAccessedProps {
    step: number;
    game?: Game;
}

export default function NotAccessed(props: NotAccessedProps) {
    let text: string;
    if (!props.game || props.game.isFinished()) {
        text = "Vous n'avez pas de partie en cours, veuillez en commencer une nouvelle."
    } else {
        if (props.game.lastStep >= props.step) {
            text = `Vous avez déjà réussi cette épreuve, veuillez reprendre à la ${props.game.lastStep+1}e étape où vous vous êtes arrêté.`
        } else if (props.game.lastStep < props.step-1) {
            text = `Vous n'avez encore atteint cette épreuve, veuillez reprendre à la ${props.game.lastStep+1}e étape où vous vous êtes arrêté.`
        } else {
            text = "Il semble qu'il y ait une erreur, veuillez prendre contact avec l'administrateur."
        }
    }

    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginHorizontal: 20,
        textAlign: "center",
    },
});
