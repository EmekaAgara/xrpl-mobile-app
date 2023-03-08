import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../components/SearchInput';
import getImageForWeather from '../utils/getImageForWeather';

const Home = () => {
    const location = 'Lagos';
    const navigation = useNavigation();
    const onGetStartedPress = () => {
      navigation.navigate('Home');
    };

  return (
    <View style={styles.container} behavior="padding">
        <Text style={styles.HelloText}>Enter your Location</Text>
        <SearchInput/>
        <Image style={styles.weatherImg}
            source={getImageForWeather('Heavy Cloud')}
        />

      <Text style={styles.mainText}>In {location}</Text>
      <Text style={styles.dText}>Today, 7th March 2023</Text>
      <Text style={styles.sText}>Its Rainy</Text>
      <Text style={styles.wText}>  38°</Text>
      <Text style={styles.subText}>Enter any Location to check weather Forecast</Text>
    
    </View>
  )
}

export default Home

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
  });
  