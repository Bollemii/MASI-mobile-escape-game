import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@/router/routes';
import { defaultStyles } from '@/defaultStyles';
import Button from '@/components/Button';
import { savePseudo } from '@/dataaccess/playerData';
import usePseudo from '@/hooks/pseudo';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [pseudo, setPseudo] = usePseudo();

    const onButtonPress = () => {
        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(routes.qrScan);
    };
    const onChangePseudo = (text: string) => {
        setPseudo(text);
        savePseudo(text);
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
        backgroundColor: defaultStyles.colors.blue,
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
        borderColor: defaultStyles.colors.black,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});
