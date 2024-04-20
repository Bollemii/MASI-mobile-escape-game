import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { constants } from "@/constants";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";
import StepNotAccess from "@/components/StepNotAccess";
import { saveLastGame } from "@/dataaccess/gameData";
import useLastGame from "@/hooks/lastGame";
import useAccelerometer from "@/hooks/accelerometer";

const data = {
    image: require("assets/images/piratesdelilebourbon/boat-deck-captain.png"),
    texts: [
        "Bienvenue à bord, moussaillon ! Je suis connu dans ces mers comme 'La Buse', un nom qui fait trembler nos ennemis et inspire le respect chez nos alliés. Mais ici, sur ce pont, vous pouvez simplement m'appeler 'Capitaine'.",
        "Nous avons besoin de toutes les mains disponibles pour cette attaque. Préparez-vous à l'action, car nous n'avons pas de temps à perdre. Les voiles sont gonflées par le vent et le Nossa Senhora do Cabo est à notre portée. Il est temps de montrer de quel bois nous nous chauffons !",
        "Prenez cette baguette et tassez la poudre de ce canon. Nous avons besoin de chaque canon prêt à cracher le feu lorsque nous atteindrons le Nossa Senhora do Cabo.",
    ],
    accelerometerThreshold: 10,
    hitCount: 3,
};

let hitCount = 0;
export default function SecondStep() {
    const navigation = useNavigation();
    const [lastGame, _] = useLastGame();
    const [iText, setIText] = useState(0);
    const {y} = useAccelerometer(500);
    if (!lastGame || lastGame.lastStep !== 1) {
        return (
            <StepNotAccess step={2} game={lastGame}/>
        )
    }

    const handlePress = () => {
        if (iText < data.texts.length - 1) {
            setIText(iText + 1);
        }
    };

    if (iText >= data.texts.length -1 && Math.abs(y) > data.accelerometerThreshold && hitCount < data.hitCount) {
        // We use Y axe to detect horizontal movement
        hitCount++;
        if (hitCount >= data.hitCount) {
            lastGame.wonStep();
            saveLastGame(lastGame).then(() => {
                hitCount = 0;
                // @ts-expect-error: navigation type is not well defined
                navigation.navigate(`${constants.screens.game[2]}/fight`);
            });
        }
    }

    return (
        <Pressable style={{flex: 1}} onPress={handlePress}>
            <BackButton text="Quitter" pageRedirect={constants.screens.home}/>
            <Image
                source={data.image}
                style={styles.image}
            />
            <SpeechPanel 
                speaker={"Capitaine"}
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
        zIndex: -1,
    },
});
