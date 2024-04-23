import { Text } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "@/router/routes";
import HomeScreen from "@/screens/HomeScreen";
import QrScan from "@/screens/QrScan";
import Introduction from "@/screens/piratesdelilebourbon/Introduction";
import FirstStep from "@/screens/piratesdelilebourbon/FirstStep";
import SecondStep from "@/screens/piratesdelilebourbon/SecondStep";
import SecondStepFight from "@/screens/piratesdelilebourbon/SecondStepFight";
import NotFound from "@/screens/NotFound";

// Escape Game routing : piratesdelilebourbon/<step>

export default function Router() {
    const Stack = createNativeStackNavigator();
    const navigationRef = useNavigationContainerRef();

    const handleError = (error: any) => {
        console.log("Unhandled routing action", error);
        // @ts-expect-error: navigation type is not well defined
        navigationRef.navigate(routes.notFound);
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
                    <Stack.Screen name={routes.game[2]} key={routes.game[2]} component={SecondStepFight}/>
                    <Stack.Screen name={`${routes.game[2]}/fight`} key={`${routes.game[2]}/fight`} component={SecondStepFight}/>
                    <Stack.Screen name={routes.game[3]} key={routes.game[3]} component={NotFound}/>
                </Stack.Group>
                <Stack.Screen name={routes.notFound} component={NotFound}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
