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
import Sendxrp from './screens/Sendxrp';
import OperationalAccount from './screens/OperationalAccount';
import CreateTrustlineSw from './screens/CreateTrustlineSw';
import CreateTrustlineOp from './screens/CreateTrustlineOp';
import NewSbWallet from './screens/NewSbWallet';
import NewOpWallet from './screens/NewOpWallet';
import WalletType from './screens/WalletType';
import HomeStandbyWallet from './screens/HomeStandbyWallet';
import HomeOperationalWallet from './screens/HomeOperationalWallet';
import HomeNftBroker from './screens/HomeNftBroker';
import Nfts from './screens/Nfts';
import SwMintNft from './screens/SWMintNft';
import OwMintNft from './screens/OwMintNft';
import NftsOw from './screens/NftsOw';
import TransferNftSw from './screens/TransferNftSw';
import TransferNftOw from './screens/TransferNftOw';


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
            name='WalletType'
            component={WalletType}
            options={{
              headerShown:false,
              }}
          />

          <Stack.Screen
            name='HomeStandbyWallet'
            component={HomeStandbyWallet}
            options={{
              headerShown:false,
              }}
          />

          <Stack.Screen
            name='Nfts'
            component={Nfts}
            options={{
              headerShown:false,
              }}
          />

          <Stack.Screen
            name='SWMintNft'
            component={SwMintNft}
            options={{
            headerShown:true,
            title: 'Mint NFTS',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='HomeOperationalWallet'
            component={HomeOperationalWallet}
            options={{
              headerShown:false,
              }}
          />

          <Stack.Screen
            name='HomeNftBroker'
            component={HomeNftBroker}
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
            name='NewSbWallet'
            component={NewSbWallet}
            options={{
            headerShown:true,
            title: 'Create Standby Wallet',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='TransferNftSw'
            component={TransferNftSw}
            options={{
            headerShown:true,
            title: 'Transfer NFT',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />


          <Stack.Screen
            name='TransferNftOw'
            component={TransferNftOw}
            options={{
            headerShown:true,
            title: 'Transfer NFT',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />


          <Stack.Screen
            name='NewOpWallet'
            component={NewOpWallet}
            options={{
            headerShown:true,
            title: 'Create Operational Wallet',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='Sendxrp'
            component={Sendxrp}
            options={{
            headerShown:true,
            title: 'Send XRP',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='OperationalAccount'
            component={OperationalAccount}
            options={{
            headerShown:true,
            title: 'Send XRP',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='NftsOw'
            component={NftsOw}
            options={{
              headerShown:false,
              }}
          />

          <Stack.Screen
            name='OwMintNft'
            component={OwMintNft}
            options={{
            headerShown:true,
            title: 'Mint NFTS',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='CreateTrustlineSw'
            component={CreateTrustlineSw}
            options={{
            headerShown:true,
            title: 'Create Trustline',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />

          <Stack.Screen
            name='CreateTrustlineOp'
            component={CreateTrustlineOp}
            options={{
            headerShown:true,
            title: 'Create Trustline',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
            }}
          />


        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


