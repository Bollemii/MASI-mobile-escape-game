import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import Game from "@/models/game";
import NotAccessed from "@/screens/NotAccessed";
import BackButton from "@/components/BackButton";
import SpeechPanel from "@/components/SpeechPanel";
import NextButton from "@/components/NextButton";
import { saveLastGame } from "@/dataaccess/gameData";
import useLastGame from "@/hooks/lastGame";
import useAccelerometer from "@/hooks/accelerometer";

const data = {
    accelerometerThreshold: 8,
    hitCount: 3,
    before: {
        image: require("assets/images/piratesdelilebourbon/boat-deck-captain.png"),
        texts: [
            "Bienvenue à bord, moussaillon ! Je suis connu dans ces mers comme 'La Buse', un nom qui fait trembler nos ennemis et inspire le respect chez nos alliés. Mais ici, sur ce pont, vous pouvez simplement m'appeler 'Capitaine'.",
            "Nous avons besoin de toutes les mains disponibles pour cette attaque. Préparez-vous à l'action, car nous n'avons pas de temps à perdre. Les voiles sont gonflées par le vent et le Nossa Senhora do Cabo est à notre portée. Il est temps de montrer de quel bois nous nous chauffons !",
            "Prenez cette baguette et tassez d'un mouvement horizontal la poudre de ce canon. Nous avons besoin de chaque canon prêt à cracher le feu lorsque nous atteindrons le Nossa Senhora do Cabo.",
        ],
    },
    after: {
        image: require("assets/images/piratesdelilebourbon/pirate-cat.png"),
        texts: [
            "À l'abordage, mes frères ! Qu'ils tremblent devant notre furie !",
            "Par les cieux déchaînés, nous sommes sur le point de les mettre en pièces !",
            "Qu'ils s'enfuient vers les profondeurs, car aujourd'hui, nous régnerons en maîtres des sept mers !",
        ],
        disclaimer: "Pour des raisons évidentes de violences, voici un adorable chaton ! Parce que même les pirates les plus féroces ont besoin d'une dose de mignonnerie de temps en temps.",
    }
};

export default function SecondStep() {
    const [lastGame, _] = useLastGame();
    const [hitCount, setHitCount] = useState(0);

    if (!lastGame || lastGame.lastStep !== 1) {
        return (
            <NotAccessed step={2} game={lastGame}/>
        )
    }
    
    if (hitCount < data.hitCount) {
        return (
            <SecondStepBefore hitSetter={setHitCount} hitCount={hitCount}/>
        );
    } else {
        return (
            <SecondStepAfter lastGame={lastGame}/>
        );
    }
}

function SecondStepBefore({ hitSetter, hitCount } : { hitSetter: (value: number) => void, hitCount: number }) {
    const [iText, setIText] = useState(0);
    const {y} = useAccelerometer(500);

    const handlePress = () => {
        if (iText < data.before.texts.length - 1) {
            setIText(iText + 1);
        }
    };

    if (iText >= data.before.texts.length -1 && Math.abs(y) > data.accelerometerThreshold) {
        // We use Y axe to detect horizontal movement
        hitSetter(hitCount + 1);
    }

    return (
        <ImageBackground source={data.before.image} style={styles.container}>
            <Pressable style={styles.container} onPress={handlePress}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <SpeechPanel 
                    speaker={"Capitaine"}
                    text={data.before.texts[iText]}
                    more={iText < data.before.texts.length - 1}
                />
            </Pressable>
        </ImageBackground>
    );
}

function SecondStepAfter({lastGame} : {lastGame: Game}) {
    const navigation = useNavigation();
    const [iText, setIText] = useState(0);

    const handlePress = () => {
        if (iText < data.before.texts.length - 1) {
            setIText(iText + 1);
        }
    };

    const handleNext = () => {
        if (iText === data.after.texts.length - 1) {
            lastGame.wonStep();
            saveLastGame(lastGame).then(() => {
                // @ts-expect-error: navigation type is not well defined
                navigation.navigate(routes.game[3]);
            });
        }
    }

    return (
        <ImageBackground source={data.after.image} style={styles.container}>
            <Pressable style={[styles.container, {alignItems: 'center'}]} onPress={handlePress}>
                <BackButton text="Quitter" pageRedirect={routes.home}/>
                <View style={styles.disclaimerContainer}>
                    <View style={styles.disclaimerIcon}>
                        <FontAwesomeIcon
                            icon={faCat}
                            size={45}
                            color={defaultStyles.colors.darkgrey}
                        />
                    </View>
                    <Text style={styles.disclaimer}>{data.after.disclaimer}</Text>
                </View>
                <SpeechPanel
                    speaker="Pirates"
                    text={data.after.texts[iText]}
                    more={iText < data.after.texts.length - 1}
                />
                {
                    iText === data.after.texts.length - 1 &&
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
    disclaimerContainer: {
        position: "absolute",
        top: 60,
        margin: 10,
        padding: 12,
        backgroundColor: defaultStyles.colors.grey,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
    },
    disclaimerIcon: {
        width: 60,
    },
    disclaimer: {
        width: "80%",
    },
});
