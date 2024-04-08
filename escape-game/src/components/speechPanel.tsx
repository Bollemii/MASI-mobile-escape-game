import { View, Text, StyleSheet } from 'react-native';

export default function SpeechPanel() {
    return (
        <View style={styles.container}>
            <Text>Speech Panel</Text>
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
