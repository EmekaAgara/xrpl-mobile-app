import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import sendxrp from './screens/sendxrp';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>


          <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='sendxrp'
            component={sendxrp}
            options={{
            headerShown:false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

