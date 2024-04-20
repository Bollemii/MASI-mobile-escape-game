import { StyleSheet, Text, View } from "react-native";

import { routes } from "@/router/routes";
import Game from "@/models/game";
import BackButton from "./BackButton";

interface StepNotAccessProps {
    step: number;
    game?: Game;
}

export default function StepNotAccess(props: StepNotAccessProps) {
    let text: JSX.Element;
    if (!props.game) {
        text = <Text style={styles.text}>Vous n'avez pas de partie en cours, veuillez en commencer une nouvelle</Text>
    } else {
        if (props.game.lastStep >= props.step) {
            text = <Text style={styles.text}>Vous avez déjà réussi cette épreuve, veuillez reprendre à la {props.game.lastStep+1}e étape où vous vous êtes arrêté</Text>
        } else if (props.game.lastStep < props.step-1) {
            text = <Text style={styles.text}>Vous n'avez encore atteint cette épreuve, veuillez reprendre à la {props.game.lastStep+1}e étape où vous vous êtes arrêté</Text>
        } else {
            text = <Text style={styles.text}>Il semble qu'il y ait une erreur, veuillez prendre contact avec l'administrateur</Text>
        }
    }

    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            {text}
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
