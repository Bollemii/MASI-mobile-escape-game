import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { constants } from "@/constants";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";

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
        } else {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(constants.screens.game[3]);
        }
    };

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <BackButton text="Quitter" pageRedirect={constants.screens.home}/>
            <View style={styles.disclaimer}>
                <Text>{data.disclaimer}</Text>
            </View>
            <Image
                source={data.image}
                style={styles.image}
            />
            <SpeechPanel
                speaker="Pirates"
                text={data.texts[iText]}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
    disclaimer: {
        position: "absolute",
        top: 60,
        margin: 10,
        padding: 10,
        backgroundColor: constants.colors.grey,
        borderColor: constants.colors.black,
        borderWidth: 3,
        borderRadius: 10,
    },
});
