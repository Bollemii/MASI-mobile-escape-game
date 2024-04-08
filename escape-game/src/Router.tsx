import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { global } from "./global";
import HomeScreen from "./screens/HomeScreen";
import QrScan from "./screens/QrScan";
import NotFound from "./screens/NotFound";

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={global.screens.home}>
                <Stack.Screen name={global.screens.home} component={HomeScreen}/>
                <Stack.Screen name={global.screens.qrScan} component={QrScan}/>
                <Stack.Screen name={global.screens.notFound} component={NotFound}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
