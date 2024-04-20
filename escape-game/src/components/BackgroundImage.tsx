import { Image, StyleSheet } from "react-native";

interface BackgroundImageProps {
    source: any;
    style?: object;
}

export default function BackgroundImage(props: BackgroundImageProps) {
    return (
        <Image source={props.source} style={props.style || styles.image}/>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
});
