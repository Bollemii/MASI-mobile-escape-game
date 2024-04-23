import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BarCodeScanningResult, Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { constants } from "@/constants";
import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import { isRouteHandled } from "@/utils/router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import RequestCameraPermission from "@/components/RequestCameraPermission";

// It is use only for development testing
const automaticScan = true;

export default function QrScan() {
    const navigation = useNavigation();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [wantScanned, setWantScanned] = useState(false);

    if (!permission?.granted) {
        return (
            <RequestCameraPermission requestPermission={requestPermission}/>
        );
    }

    const onBarCodeScanned = (result: BarCodeScanningResult) => {
        setWantScanned(false);
        const route = result.data.split('\n')[0];
        
        if (!isRouteHandled(route)) {
            console.log('QR code not handled:', route);
            return;
        }

        // @ts-expect-error: navigation type is not well defined
        navigation.navigate(route);
    };
    const handleScan = () => {
        setWantScanned(true);
    };

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={automaticScan || wantScanned ? onBarCodeScanned : undefined}
                ratio={constants.window.ratio}
            />
            <BackButton text="Retour" pageRedirect={routes.home}/>
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
    },
    button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: defaultStyles.colors.blue,
        padding: 15,
        borderRadius: 10,
    },
    textButton: {
        fontSize: 15,
        color: defaultStyles.colors.white,
    },
});
