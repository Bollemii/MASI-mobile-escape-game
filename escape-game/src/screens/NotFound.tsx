import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
    return (
        <View style={styles.container}>
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
