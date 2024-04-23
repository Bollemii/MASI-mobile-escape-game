import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { defaultStyles } from '@/defaultStyles';

interface SpeechPanelProps {
    speaker?: string;
    text: string;
}

export default function SpeechPanel(props: SpeechPanelProps) {
    const speaker = props.speaker ? props.speaker.toLowerCase().charAt(0).toUpperCase() + props.speaker.slice(1) : undefined;
    return (
        <View style={styles.container}>
            {props.speaker && <Text style={styles.speaker}>{speaker}</Text>}
            <ScrollView>
                <Text style={styles.text}>{props.text}</Text>
                {/* Empty Text to add space at end of scroll */} 
                <Text></Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: defaultStyles.colors.blue,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 30,
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
    },
    speaker: {
        color: defaultStyles.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 16,
        lineHeight: 20,
    },
});
