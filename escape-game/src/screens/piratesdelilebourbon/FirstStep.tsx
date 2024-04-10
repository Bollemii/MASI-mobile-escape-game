import { useState } from "react";
import { Image, StyleSheet, View } from "react-native"

import BackButton from "../../components/BackButton";
import SpeechPanel from "../../components/speechPanel";
import { getSavedPseudo } from "../../dataaccess/playerData";

const data = {
    dark: {
        image: require("../../../assets/images/calle-sombre.png"),
        text: "Où suis-je ? La noirceur m’enveloppe, et les tonneaux de rhum semblent se moquer de moi. Mais attendez… des voix étouffées viennent du pont. Je devrais absolument aller voir s’il y a des gens là-haut. Le problème, c’est qu’on y voit pas grand chose ici."
    },
    light: {
        image: require("../../../assets/images/calle-clair.png"),
        text: "Ok, voilà qui est mieux ! Avec ma lampe allumée, je peux enfin voir où je mets les pieds. Maintenant, il est temps de sortir de cette pièce. Pas question de rester coincé ici plus longtemps."
    }
}

export default function FirstStep () {
    const [pseudo, setPseudo] = useState("")
    const [lightOn, setLightOn] = useState(false)
    getSavedPseudo().then((pseudo) => setPseudo(pseudo || "Joueur"))

    return (
        <View>
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
    image: {
        width: '100%',
        height: '100%',
    },
});
