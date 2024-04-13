import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";
import StepNotAccess from "@/components/StepNotAccess";
import useLastGame from "@/hooks/lastGame";

const data = {
    image: require("assets/images/piratesdelilebourbon/boat-deck-captain.png"),
    text: [
        "Bienvenue à bord, moussaillon ! Je suis connu dans ces mers comme 'La Buse', un nom qui fait trembler nos ennemis et inspire le respect chez nos alliés. Mais ici, sur ce pont, vous pouvez simplement m'appeler 'Capitaine'.",
        "Nous avons besoin de toutes les mains disponibles pour cette attaque. Préparez-vous à l'action, car nous n'avons pas de temps à perdre. Les voiles sont gonflées par le vent et le Nossa Senhora do Cabo est à notre portée. Il est temps de montrer de quel bois nous nous chauffons !",
        "Prenez cette baguette et tassez la poudre de ce canon. Nous avons besoin de chaque canon prêt à cracher le feu lorsque nous atteindrons le Nossa Senhora do Cabo.",
    ],
};

export default function SecondStep() {
    const [iText, setIText] = useState(0);
    const [lastGame, _] = useLastGame();

    if (!lastGame || lastGame.lastStep !== 1) {
        return (
            <StepNotAccess step={1} game={lastGame}/>
        )
    }

    const handlePress = () => {
        if (iText < data.text.length - 1) {
            setIText(iText + 1);
        }
    }

    return (
        <Pressable style={{flex: 1}} onPress={handlePress}>
            <BackButton text="Quitter" pageRedirect="Home"/>
            <Image
                source={data.image}
                style={styles.image}
            />
            <SpeechPanel 
                speaker={"Capitaine"}
                text={data.text[iText]}
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
        zIndex: -1,
    },
});
