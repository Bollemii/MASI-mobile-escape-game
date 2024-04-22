import { StyleSheet, Text, View } from 'react-native';

import { routes } from '@/router/routes';
import BackButton from '@/components/BackButton';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Text>La page demandée n'existe pas.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
