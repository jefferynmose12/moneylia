import React, {useEffect} from "react";
import { NativeBaseProvider } from "native-base";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PaymentsDetails } from "./src/screens/PaymentsDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./src/navigator/BottomTabs";
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="PaymentsDetails" component={PaymentsDetails} />
          <Stack.Screen name="Bottom" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}