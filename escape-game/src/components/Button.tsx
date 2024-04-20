import { Text, Pressable, StyleSheet } from 'react-native';

import { defaultStyles } from '@/defaultStyles';

interface ButtonProps {
    text: string;
    onPress: () => void;
    buttonStyle?: object;
    textStyle?: object;
}

export default function Button(props: ButtonProps) {
    const buttonStyle = props.buttonStyle || styles.defaultButton;

    return (
        <Pressable 
            onPress={props.onPress}
            style={(state) => state.pressed ? [buttonStyle, styles.buttonPressed] : [buttonStyle, styles.button]}
        >
            <Text style={[props.textStyle, styles.textButton]}>{props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    defaultButton: {
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
    },
    button: {
        backgroundColor: defaultStyles.colors.blue,
    },
    buttonPressed: {
        backgroundColor: defaultStyles.colors.darkBlue,
    },
    textButton: {
        color: defaultStyles.colors.white,
    },
});
