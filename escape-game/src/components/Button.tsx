import { Text, Pressable, StyleSheet } from 'react-native';

import { defaultStyles } from '@/defaultStyles';

interface ButtonProps {
    text: string;
    onPress: () => void;
    buttonStyle?: object;
    colorButton?: string;
    colorPressedButton?: string;
    textStyle?: object;
}

export default function Button(props: ButtonProps) {
    const buttonStyle = props.buttonStyle || styles.defaultButton;
    const colorButton = { backgroundColor: props.colorButton || defaultStyles.colors.blue };
    const colorPressedButton = { backgroundColor: props.colorPressedButton || defaultStyles.colors.darkBlue };
    const textStyle = props.textStyle || styles.textButton;
    const text = props.text.replace('\\n', '\n');
    
    return (
        <Pressable 
            onPress={props.onPress}
            style={(state) => state.pressed ? [buttonStyle, colorPressedButton] : [buttonStyle, colorButton]}
        >
            <Text style={[textStyle]}>{text}</Text>
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
    textButton: {
        color: defaultStyles.colors.white,
    },
});
