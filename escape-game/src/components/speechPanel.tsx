import { View, Text, StyleSheet } from 'react-native';
import { global } from '../global';

interface SpeechPanelProps {
    speaker: string;
    text: string;
}
export default function SpeechPanel(props: SpeechPanelProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.speaker}>{props.speaker}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '25%',
        backgroundColor: global.colors.blue,
        position: 'absolute',
        bottom: 0,
        padding: 5,
    },
    speaker: {
        color: global.colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 5,
        color: global.colors.white,
        fontSize: 13,
        textAlign: 'center',
    },
});
