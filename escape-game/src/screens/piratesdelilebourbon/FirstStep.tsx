import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addBatteryStateListener } from "expo-battery";
import { Camera, PermissionStatus, FlashMode } from "expo-camera";

import { constants } from "../../constants";
import BackButton from "../../components/BackButton";
import SpeechPanel from "../../components/SpeechPanel";
import { getSavedPseudo } from "../../dataaccess/playerData";

const data = {
    dark: {
        image: require("../../../assets/images/piratesdelilebourbon/dark-ships-hold.png"),
        text: "Où suis-je ? La noirceur m’enveloppe, et les tonneaux de rhum semblent se moquer de moi. Mais attendez… des voix étouffées viennent du pont. Je devrais absolument aller voir s’il y a des gens là-haut. Le problème, c’est qu’on y voit pas grand chose ici."
    },
    light: {
        image: require("../../../assets/images/piratesdelilebourbon/light-ships-hold.png"),
        text: "Ok, voilà qui est mieux ! Avec ma lampe allumée, je peux enfin voir où je mets les pieds. Maintenant, il est temps de sortir de cette pièce. Pas question de rester coincé ici plus longtemps."
    }
}

export default function FirstStep () {
    const navigation = useNavigation()
    const [pseudo, setPseudo] = useState("")
    getSavedPseudo().then((pseudo) => setPseudo(pseudo || "Joueur"))
    const [lightOn, setLightOn] = useState(false)

    const batteryListener = addBatteryStateListener(({ batteryState }) => {
        const isCharging = batteryState === 2
        if (isCharging !== lightOn) {
            setLightOn(batteryState === 2)
        }
    })

    useEffect(() => {
        return () => {            
            batteryListener.remove()
        }
    }, [])

    const win = () => {
        // @TODO Save the state of the game

        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(constants.screens.game[2])
    }

    return (
        <View>
            <Camera flashMode={lightOn ? FlashMode.torch : FlashMode.off}/>
            <Image
                source={lightOn ? data.light.image : data.dark.image}
                style={styles.image}
            />
            <BackButton text="Quitter" pageRedirect="Home"/>
            <SpeechPanel 
                speaker={pseudo}
                text={lightOn ? data.light.text : data.dark.text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
