import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { constants } from "../../constants";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

const data = {
    text : [
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

    // @TODO Save the state of the game

    function handlePress() {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(constants.screens.game[1]);
    }

    return (
        <View style={styles.container}>
            <BackButton text="Quitter" pageRedirect="Home"/>
            <Text style={styles.title}>Pirates de l'Ile Bourbon</Text>
            <View style={{marginHorizontal: 20}}>
                <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 10}]}>{data.text[0]}</Text>
                <Text style={styles.text}>{data.text[1]}</Text>
                <Text style={styles.text}>{data.text[2]}</Text>
                <Text style={styles.text}>{data.text[3]}</Text>
                <Text style={styles.text}>{data.text[4]}</Text>
                <Text style={[styles.text, {marginTop: 50}]}>{data.text[5]}</Text>
            </View>
            <Button text="Commencer" onPress={handlePress} buttonStyle={styles.button}/>
        </View>
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
    }
});
