import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { constants } from "./constants";
import HomeScreen from "./screens/HomeScreen";
import QrScan from "./screens/QrScan";
import Introduction from "./screens/piratesdelilebourbon/Introduction";
import NotFound from "./screens/NotFound";

const Stack = createNativeStackNavigator();

// Escape Game routing : piratesdelilebourbon/<step>

export default function Router() {
    return (
        <NavigationContainer fallback={<Text>Chargement...</Text>}>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={constants.screens.home}>
                <Stack.Screen name={constants.screens.home} component={HomeScreen}/>
                <Stack.Screen name={constants.screens.qrScan} component={QrScan}/>
                <Stack.Group>
                    <Stack.Screen name={constants.screens.game[0]} key={constants.screens.game[0]} component={Introduction}/>
                    <Stack.Screen name={constants.screens.game[1]} key={constants.screens.game[1]} component={NotFound}/>
                    <Stack.Screen name={constants.screens.game[2]} key={constants.screens.game[2]} component={NotFound}/>
                    <Stack.Screen name="piratesdelilebourbon/3" key="piratesdelilebourbon/3" component={NotFound}/>
                </Stack.Group>
                <Stack.Screen name={constants.screens.notFound} component={NotFound}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
