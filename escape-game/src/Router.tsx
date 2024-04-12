import { Text } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { constants } from "@/constants";
import HomeScreen from "@/screens/HomeScreen";
import QrScan from "@/screens/QrScan";
import Introduction from "@/screens/piratesdelilebourbon/Introduction";
import FirstStep from "@/screens/piratesdelilebourbon/FirstStep";
import NotFound from "@/screens/NotFound";

// Escape Game routing : piratesdelilebourbon/<step>

export default function Router() {
    const Stack = createNativeStackNavigator();
    const navigationRef = useNavigationContainerRef();

    const handleError = (error: any) => {
        console.log("Unhandled routing action", error);
        // @ts-expect-error: navigation type is not well defined
        navigationRef.navigate(constants.screens.notFound);
    };

    return (
        <NavigationContainer
            fallback={<Text>Chargement...</Text>}
            ref={navigationRef}
            onUnhandledAction={handleError}
        >
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={constants.screens.home}>
                <Stack.Screen name={constants.screens.home} component={HomeScreen}/>
                <Stack.Screen name={constants.screens.qrScan} component={QrScan}/>
                <Stack.Group>
                    <Stack.Screen name={constants.screens.game[0]} key={constants.screens.game[0]} component={Introduction}/>
                    <Stack.Screen name={constants.screens.game[1]} key={constants.screens.game[1]} component={FirstStep}/>
                    <Stack.Screen name={constants.screens.game[2]} key={constants.screens.game[2]} component={NotFound}/>
                    <Stack.Screen name={constants.screens.game[3]} key={constants.screens.game[3]} component={NotFound}/>
                </Stack.Group>
                <Stack.Screen name={constants.screens.notFound} component={NotFound}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
