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
import SplashScreen from './screens/SplashScreen';
import SplashScreen1 from './screens/SplashScreen1';
import SplashScreen2 from './screens/SplashScreen2';
import SplashScreen3 from './screens/SplashScreen3';
import SplashScreen4 from './screens/SplashScreen4';
import MyOpWallet from './screens/MyOpWallet';
import MySbWallet from './screens/MySbWallet';
import BatchMintNft from './screens/BatchMintNft';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>

        <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen1'
            component={SplashScreen1}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen2'
            component={SplashScreen2}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen3'
            component={SplashScreen3}
            options={{
            headerShown:false,
            }}
          />

          <Stack.Screen
            name='SplashScreen4'
            component={SplashScreen4}
            options={{
            headerShown:false,
            }}
          />


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
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='MyOpWallet'
            component={MyOpWallet}
            options={{
            headerShown:true,
            title: 'My Wallet',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='MySbWallet'
            component={MySbWallet}
            options={{
            headerShown:true,
            title: 'My Wallet',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
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
            name='BatchMintNft'
            component={BatchMintNft}
            options={{
              headerShown:true,
              title: 'Batch Mint Nft',
              headerStyle: {
                backgroundColor: '#fafafa'
              },
              headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='NewSbWallet'
            component={NewSbWallet}
            options={{
            headerShown:true,
            title: 'Create Standby Wallet',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='TransferNftSw'
            component={TransferNftSw}
            options={{
            headerShown:true,
            title: 'Transfer NFT',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />


          <Stack.Screen
            name='TransferNftOw'
            component={TransferNftOw}
            options={{
            headerShown:true,
            title: 'Transfer NFT',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />


          <Stack.Screen
            name='NewOpWallet'
            component={NewOpWallet}
            options={{
            headerShown:true,
            title: 'Create Operational Wallet',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='Sendxrp'
            component={Sendxrp}
            options={{
            headerShown:true,
            title: 'Send XRP',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='OperationalAccount'
            component={OperationalAccount}
            options={{
            headerShown:true,
            title: 'Send XRP',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
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
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='CreateTrustlineSw'
            component={CreateTrustlineSw}
            options={{
            headerShown:true,
            title: 'Create Trustline',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name='CreateTrustlineOp'
            component={CreateTrustlineOp}
            options={{
            headerShown:true,
            title: 'Create Trustline',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          />


        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


