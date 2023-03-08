
import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';


export default class Sendxrp extends PureComponent {
  render() {
    
    return (
      <SafeAreaView
         
        style={styles.safeArea}>
        <WebView 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          source={{ uri: 'https://xrpl-project.netlify.app/' }} 
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    maxWidth:'100%',
    // max-width: '100%',
    // overflow-x: hidden,
  }
})