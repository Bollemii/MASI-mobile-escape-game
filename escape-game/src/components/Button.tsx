import { Text, Pressable, StyleSheet } from 'react-native';

import { constants } from '../constants';

interface ButtonProps {
    text: string;
    onPress: () => void;
    buttonStyle?: object;
    textStyle?: object;
}

export default function Button(props: ButtonProps) {
    return (
        <Pressable 
            onPress={props.onPress}
            style={(state) => state.pressed ? [props.buttonStyle, styles.buttonPressed] : [props.buttonStyle, styles.button]}
        >
            <Text style={[props.textStyle, styles.textButton]}>{props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: constants.colors.blue,
    },
    buttonPressed: {
        backgroundColor: constants.colors.darkBlue,
    },
    textButton: {
        color: constants.colors.white,
    },
});
