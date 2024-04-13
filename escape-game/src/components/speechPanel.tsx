import { View, Text, StyleSheet } from 'react-native';

import { constants } from '../constants';

interface SpeechPanelProps {
    speaker?: string;
    text: string;
}

export default function SpeechPanel(props: SpeechPanelProps) {
    return (
        <View style={styles.container}>
            {props.speaker && <Text style={styles.speaker}>{props.speaker}</Text>}
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '21%',
        backgroundColor: constants.colors.blue,
        position: 'absolute',
        bottom: 0,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
    },
    speaker: {
        color: constants.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        position: 'absolute',
        top: 5,
        left: 10,
    },
    text: {
        marginVertical: 'auto',
        color: constants.colors.white,
        fontSize: 14,
        textAlign: 'center',
    },
});
