import { Text } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "@/router/routes";
import HomeScreen from "@/screens/HomeScreen";
import QrScan from "@/screens/QrScan";
import Introduction from "@/screens/piratesdelilebourbon/Introduction";
import FirstStep from "@/screens/piratesdelilebourbon/FirstStep";
import SecondStep from "@/screens/piratesdelilebourbon/SecondStep";
import ThirdStep from "@/screens/piratesdelilebourbon/ThirdStep";
import NotFound from "@/screens/NotFound";
import EndPage from "@/screens/EndGame";

// Escape Game routing : piratesdelilebourbon/<step>

export default function Router() {
    const Stack = createNativeStackNavigator();
    const navigationRef = useNavigationContainerRef();

    const handleError = (error: any) => {
        console.log("Unhandled routing action", error);
        // @ts-expect-error: navigation type is not well defined
        navigationRef.navigate("*");
    };

    return (
        <NavigationContainer
            fallback={<Text>Chargement...</Text>}
            ref={navigationRef}
            onUnhandledAction={handleError}
        >
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.home}>
                <Stack.Screen name={routes.home} component={HomeScreen}/>
                <Stack.Screen name={routes.qrScan} component={QrScan}/>
                <Stack.Group>
                    <Stack.Screen name={routes.game[0]} key={routes.game[0]} component={Introduction}/>
                    <Stack.Screen name={routes.game[1]} key={routes.game[1]} component={FirstStep}/>
                    <Stack.Screen name={routes.game[2]} key={routes.game[2]} component={SecondStep}/>
                    <Stack.Screen name={routes.game[3]} key={routes.game[3]} component={ThirdStep}/>
                </Stack.Group>
                <Stack.Screen name="*" component={NotFound}/>
                <Stack.Screen name={routes.end} component={EndPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
