import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@/router/routes';
import { defaultStyles } from '@/defaultStyles';
import NextButton from "@/components/NextButton";

const data = {
    image: require('assets/images/piratesdelilebourbon/boat.jpg'),
    texts : [
        "Bravo, aventurier intrépide !",
        "Vous avez triomphé des défis les plus redoutables et démontré votre ingéniosité à chaque tournant. Félicitations pour avoir exploré les mystères des pirates de l'Île Bourbon et découvert les secrets du navire “Le Victorieux”.",
        "Votre courage vous a mené à la victoire, et votre nom restera gravé dans les annales des explorateurs légendaires. Continuez à explorer, à rêver et à défier les limites de l'imagination.",
        "Votre aventure ne fait que commencer !"
    ]
}

export default function HomeScreen() {
    const navigation = useNavigation();

    const onButtonPress = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(routes.home);
    };

    return (
        <ImageBackground source={data.image} style={styles.container}>
            <Text style={styles.title}>{}</Text>
            <View>
                <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 10, fontSize: 20}]}>{data.texts[0]}</Text>
                <Text style={styles.text}>{data.texts[1]}</Text>
                <Text style={styles.text}>{data.texts[2]}</Text>
                <Text style={styles.text}>{data.texts[3]}</Text>
                <Text style={[styles.text, {marginTop: 25}]}>{data.texts[4]}</Text>
            </View>
            <NextButton 
                onPress={onButtonPress}
                text="Retour à la page d’accueil" 
                theme="blue"
            />
        </ImageBackground>
    );

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
