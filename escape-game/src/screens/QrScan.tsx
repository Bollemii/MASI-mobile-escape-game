import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarCodeScanningResult, Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { constants } from "@/constants";
import { isRouteHandled } from "@/utils/router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

export default function QrScan() {
    const navigation = useNavigation();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    
    if (!permission?.granted) {
        return (
            <View style={[styles.container, {marginHorizontal: 20}]}>
                <BackButton text="Retour" pageRedirect="Home"/>
                <Text style={{marginBottom: 30}}>"Veuillez autoriser l'accès à la caméra pour continuer"</Text>
                <Button onPress={requestPermission} text="Autoriser la caméra"/>
            </View>
        );
    }

    const onBarCodeScanned = (result: BarCodeScanningResult) => {
        setScanned(true);
        const route = result.data.split('\n')[0];
        
        if (!isRouteHandled(route)) {
            console.log('QR code not handled:', route);
            return;
        }

        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(route);
    };
    const handleScan = () => {
        setScanned(false);
    };

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
                ratio={constants.options.windowRatio}
            />
            <BackButton text="Retour" pageRedirect="Home"/>
            <Button
                text="Scanner un QR code" 
                onPress={handleScan} 
                buttonStyle={styles.button} 
                textStyle={styles.textButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: constants.colors.blue,
        padding: 15,
        borderRadius: 10,
    },
    textButton: {
        color: 'white',
        fontSize: 15,
    },
});
