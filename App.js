import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import globalstyles from "./src/config/styles";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./src/components/screens/LandingScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import RecoveryScreen from "./src/components/screens/RecoveryScreen";
import HomeScreen from "./src/components/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={LandingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Recovery"
            component={RecoveryScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);
