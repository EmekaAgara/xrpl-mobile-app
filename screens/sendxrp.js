
import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';


export default class Sendxrp extends PureComponent {
  render() {
    
    return (
      <SafeAreaView  style={styles.safeArea}>
        <WebView 
          source={{ uri: 'https://xrpl-project.netlify.app/' }} 
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }
})