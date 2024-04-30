import { View, StyleSheet, Text, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@/router/routes';
import { defaultStyles } from '@/defaultStyles';
import Button from '@/components/Button';
import { savePseudo } from '@/dataaccess/playerData';
import usePseudo from '@/hooks/pseudo';

const data = {
    image: require('assets/images/app-background.jpg'),
};

export default function HomeScreen() {
    const navigation = useNavigation();
    const [pseudo, setPseudo] = usePseudo();

    const onButtonPress = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(routes.qrScan);
    };
    const onChangePseudo = (text: string) => {
        setPseudo(text);
        savePseudo(text.trim());
    };

    return (
        <ImageBackground source={data.image} style={styles.container}>
            <Text style={styles.title}>{"Escape\nMuseum"}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>Votre pseudo</Text>
                <TextInput
                    placeholder="Entrez votre pseudo"
                    value={pseudo}
                    onChangeText={onChangePseudo}
                    style={styles.input}
                />
            </View>
            <Button 
                onPress={onButtonPress} 
                text="Commencer\nvotre aventure" 
                buttonStyle={styles.button} 
                textStyle={styles.textButton}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        color: defaultStyles.colors.white,
        textShadowColor: defaultStyles.colors.black,
        textShadowRadius: 20,
    },
    button: {
        height: 180,
        width: 180,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
        color: defaultStyles.colors.white,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'flex-start'
    },
    textInput: {
        marginBottom: 5,
        color: defaultStyles.colors.white,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: defaultStyles.colors.white,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});
