import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BarCodeScanningResult, Camera, PermissionStatus } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { constants } from "../constants";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

export default function QrScan() {
    const navigation = useNavigation();

    const [permission, setPermission] = Camera.useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    
    if (!permission?.status || permission.status !== PermissionStatus.GRANTED) {
        Camera.requestCameraPermissionsAsync().then((permission) => {
            setPermission(permission);
        });
    }
    
    if (!permission?.status || permission.status !== PermissionStatus.GRANTED) {
        return (
            <View style={styles.container}>
                <BackButton text="Retour" pageRedirect="Home"/>
                <Text>"Veuillez autoriser l'accès à la caméra pour continuer"</Text>
            </View>
        );
    }

    const onBarCodeScanned = (result: BarCodeScanningResult) => {
        setScanned(true);
        navigation.navigate(result.data.split('\n')[0]);
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
