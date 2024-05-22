import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";

import { defaultStyles } from "@/defaultStyles";
import { routes } from "@/router/routes";
import { isRouteHandled } from "@/utils/router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

// It is use only for development testing
const automaticScan = false;

export default function QrScan() {
    const navigation = useNavigation();
    const [permission, requestPermission] = useCameraPermissions();
    const [wantScanned, setWantScanned] = useState(false);

    const onBarCodeScanned = (result: BarcodeScanningResult) => {
        setWantScanned(false);
        const route = result.data.split('\n')[0];
        
        if (isRouteHandled(route)) {
            // @ts-expect-error: navigation type is not well defined
            navigation.navigate(route);
        } else {
            console.log('QR code not handled:', route);
            Toast.show('QR code non reconnu', {
                position: Toast.positions.CENTER,
            });
        }
    };
    const handleScan = () => {
        setWantScanned(true);
    };

    useEffect(() => {
        if (permission?.granted) {
            requestPermission();
        }
    }, [permission]);

    return (
        <CameraView
            style={styles.camera}
            enableTorch
            flash="on"
            barcodeScannerSettings={{barcodeTypes: ["qr"]}}
            onBarcodeScanned={automaticScan || wantScanned ? onBarCodeScanned : undefined}
        >
            <BackButton text="Retour" pageRedirect={routes.home}/>
            <Button
                text="Scanner un QR code" 
                onPress={handleScan} 
                buttonStyle={styles.button}
                textStyle={styles.textButton}
            />
        </CameraView>
    );
};

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
