import { ImageBackground, StyleSheet, Text } from 'react-native';

import { routes } from '@/router/routes';
import BackButton from '@/components/BackButton';
import { defaultStyles } from '@/defaultStyles';

const image = require('assets/images/not-found.jpg');

export default function NotFound() {
    return (
        <ImageBackground source={image} style={styles.container}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text style={styles.text}>La page demandée n'existe pas.</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: defaultStyles.colors.black,
        fontSize: 20,
        marginTop: 230,
    },
});
