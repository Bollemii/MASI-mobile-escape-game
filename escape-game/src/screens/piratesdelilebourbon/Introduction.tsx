import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { constants } from "../../constants";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";


export default function Introduction() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate(constants.screens.game[1]);
    }

    return (
        <View style={styles.container}>
            <BackButton text="Quitter" pageRedirect="Home"/>
            <Text style={styles.title}>Pirates de l'Ile Bourbon</Text>
            <View style={{marginHorizontal: 20}}>
                <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 10}]}>Bienvenue à bord, moussaillon !</Text>
                <Text style={styles.text}>Vous voilà plongé dans l’univers impitoyable des pirates, à bord du navire “Le Victorieux”.</Text>
                <Text style={styles.text}>Votre mission ? Survivre, résoudre des énigmes et échapper à ce monde de corsaires et de trésors maudits.</Text>
                <Text style={styles.text}>Prêt à lever l'ancre et à vous aventurer dans l'inconnu ?</Text>
                <Text style={styles.text}>Que votre esprit d'aventure vous guide vers de nouveaux horizons !</Text>
                <Text style={[styles.text, {marginTop: 50}]}>Avant de commencer votre périple à travers l'univers des pirates, veuillez noter que cette aventure nécessite l'utilisation des fonctionnalités spécifiques de votre téléphone.</Text>
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
