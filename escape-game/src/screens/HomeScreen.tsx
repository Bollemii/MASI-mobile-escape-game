import { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';

import { getSavedPseudo, setSavedPseudo } from '../dataaccess/playerData';

export default function HomeScreen() {
    const [pseudo, setPseudo] = useState(getSavedPseudo() || 'Joueur');

    useEffect(() => {        
        setSavedPseudo(pseudo);
    }, [pseudo]);

    const onButtonPress = () => {
        console.log('Start Game');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escape Museum</Text>
            <Pressable onPress={onButtonPress} style={styles.button}>
                <Text style={styles.textButton}>Commencer une aventure</Text>
            </Pressable>
            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>Pseudo du joueur :</Text>
                <TextInput
                    placeholder="Entrez votre pseudo"
                    value={pseudo}
                    onChangeText={setPseudo}
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
        backgroundColor: '#0D99FF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
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
