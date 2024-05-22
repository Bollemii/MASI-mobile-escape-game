import { StyleSheet, View } from "react-native";

import { defaultStyles } from "@/defaultStyles";
import Button from "./Button";

interface NextButtonProps {
    text: string;
    onPress: () => void;
    theme: 'blue' | 'white';
};

export default function NextButton(props: NextButtonProps) {
    const colorButton = props.theme === 'blue' ? defaultStyles.colors.blue : defaultStyles.colors.white;
    const colorPressedButton = props.theme === 'blue' ? defaultStyles.colors.darkBlue : defaultStyles.colors.grey;
    const textStyle = props.theme === 'blue' ? {color: defaultStyles.colors.white} : {color: defaultStyles.colors.blue};

    return (
        <Button
            text={props.text}
            onPress={props.onPress}
            buttonStyle={styles.button}
            colorButton={colorButton}
            colorPressedButton={colorPressedButton}
            textStyle={textStyle}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        bottom: 25,
        borderRadius: 30,
    },
});
