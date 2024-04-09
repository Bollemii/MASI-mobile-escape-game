import { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { constants } from '../constants';
import Button from '../components/Button';
import { getSavedPseudo, setSavedPseudo } from '../dataaccess/playerData';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [pseudo, setPseudo] = useState('Joueur');

    getSavedPseudo().then((savedPseudo) => {
        if (savedPseudo) {
            setPseudo(savedPseudo);
        }
    });

    const onButtonPress = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(constants.screens.qrScan);
    };
    const onChangePseudo = (text: string) => {
        setPseudo(text);
        setSavedPseudo(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escape Museum</Text>
            <Button 
                onPress={onButtonPress} 
                text="Commencer une aventure" 
                buttonStyle={styles.button} 
                textStyle={styles.textButton}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>Pseudo du joueur :</Text>
                <TextInput
                    placeholder="Entrez votre pseudo"
                    value={pseudo}
                    onChangeText={onChangePseudo}
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    button: {
        height: 200,
        width: 200,
        backgroundColor: constants.colors.blue,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '80%',
        alignItems: 'flex-start'
    },
    textInput: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});
