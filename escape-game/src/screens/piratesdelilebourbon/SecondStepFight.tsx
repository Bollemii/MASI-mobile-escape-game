import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";
import NextButton from "@/components/NextButton";

const data = {
    image: require("assets/images/piratesdelilebourbon/pirate-cat.png"),
    texts: [
        "À l'abordage, mes frères ! Qu'ils tremblent devant notre furie !",
        "Par les cieux déchaînés, nous sommes sur le point de les mettre en pièces !",
        "Qu'ils s'enfuient vers les profondeurs, car aujourd'hui, nous régnerons en maîtres des sept mers !",
    ],
    disclaimer: "Pour des raisons évidentes de violences, voici un adorable chaton ! Parce que même les pirates les plus féroces ont besoin d'une dose de mignonnerie de temps en temps.",
};

export default function SecondStepFight() {
    const navigation = useNavigation();
    const [iText, setIText] = useState(0);
    
    const handlePress = () => {
        if (iText < data.texts.length - 1) {
            setIText(iText + 1);
        }
    };
    const handleNext = () => {
        if (iText === data.texts.length - 1) {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(routes.game[3]);
        }
    }

    return (
        <ImageBackground source={data.image} style={styles.container}>
            <Pressable style={[styles.container, {alignItems: 'center'}]} onPress={handlePress}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <View style={styles.disclaimer}>
                    <Text>{data.disclaimer}</Text>
                </View>
                <SpeechPanel
                    speaker="Pirates"
                    text={data.texts[iText]}
                />
                {
                    iText === data.texts.length - 1 &&
                    <NextButton text="Étape suivante" onPress={handleNext} theme="white"/>
                }
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    disclaimer: {
        position: "absolute",
        top: 60,
        margin: 10,
        padding: 10,
        backgroundColor: defaultStyles.colors.grey,
        borderColor: defaultStyles.colors.black,
        borderWidth: 3,
        borderRadius: 10,
    },
});
