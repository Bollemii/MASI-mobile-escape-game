import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/BackButton';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <BackButton text="Retour" pageRedirect="Home"/>
            <Text>Not Found</Text>
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
