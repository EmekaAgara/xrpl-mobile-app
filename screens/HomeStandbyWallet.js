import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../components/SearchInput';
import getImageForWeather from '../utils/getImageForWeather';

const HomeStandbyWallet = () => {

    const navigation = useNavigation();

    const onNewSbWalletPress = () => {
      navigation.navigate('NewSbWallet');
    };

    const onSendxrpPress = () => {
      navigation.navigate('Sendxrp');
    };

    const onCreateTlSwPress = () => {
      navigation.navigate('CreateTrustlineSw');
    };

    const onNftsPress = () => {
      navigation.navigate('Nfts');
    };

  return (
    <View style={styles.container} behavior="padding">
        <Text style={styles.HelloText}>standby Account home</Text>


      <TouchableOpacity onPress={onNewSbWalletPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}> Get new Wallet Account</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={onSendxrpPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Send xrp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCreateTlSwPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Create Trustline</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={onNftsPress} style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Explore NFTS</Text>
      </TouchableOpacity>

      
    
    </View>
  )
}

export default HomeStandbyWallet

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      paddingBottom:30
    },

    HelloText:{
        color:'white',
        fontSize:25,
        fontWeight:700,
        textAlign:'left',
        paddingHorizontal:20,
    },

    mainText:{
        color:'white',
        fontSize:30,
        fontWeight:700,
        textAlign:'center',
        paddingHorizontal:50,
        paddingBottom:10,
    },

    wText:{
        color:'white',
        fontSize:90,
        fontWeight:600,
        textAlign:'center',
        paddingHorizontal:50,
        marginVertical:15
    },

    dText:{
        color:'white',
        fontSize:15,
        fontWeight:600,
        textAlign:'center', 
        paddingHorizontal:50,
        color:'#818589',
        lineHeight:20,
    },

    sText:{
        color:'white',
        fontSize:20,
        fontWeight:600,
        textAlign:'center', 
        paddingHorizontal:50,
        color:'#ffffff',
        lineHeight:20,
        paddingTop:10
    },

    subText:{
        color:'white',
        fontSize:15,
        fontWeight:500,
        textAlign:'center', 
        paddingHorizontal:50,
        color:'#818589',
        lineHeight:20,
    },

    weatherImg:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 250,
        alignContent:'center',
        alignSelf:'center',
        marginVertical:30
    },

    textInput: {
        backgroundColor: '#212125',
        height: 55,
        width: '90%',
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 25,
        alignSelf: 'flex-start',
        borderRadius:7,
        color:'#818589'
    },

    ButtonContainer: {
      backgroundColor: "#5659C6",
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 140,
      marginBottom:10,
      
  },


  ButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: 500,
      alignSelf: "center",
  },

  });
  