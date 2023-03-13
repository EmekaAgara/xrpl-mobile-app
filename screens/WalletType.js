import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../components/SearchInput';
import { FlatList } from 'react-native';

const data = [
  {
    id:"1",
    image:"../assets/30.png",
    title:"Standby Wallet",
    description:"Standby wallet addresses, which are operated by actual humans, can send tokens to operational addresses."
  },

  {
    id:"2",
    image:"../assets/30.png",
    title:"Operational Wallet",
    description:"Operational addresses, which are operated by automated systems, send payments to other counterparties, such as liquidity providers, partners, and other customer."
  },

  {
    id:"3",
    image:"../assets/30.png",
    title:"NFT Broker Wallet",
    description:"NFT Broker wallet batch mint NFTokens and broker NFToken transactions."
  }
]



const WalletType = () => {
    const location = 'Lagos';

    const navigation = useNavigation();

    const onStandbyWalletPress = () => {
      navigation.navigate('HomeStandbyWallet');
    };

    const onOperationalWalletPress = () => {
      navigation.navigate('HomeOperationalWallet');
    };

    const onNftBrokerPress = () => {
      navigation.navigate('HomeNftBroker');
    };

  return (

    <View style={styles.container} behavior="padding">

    <Text style={styles.HelloText}>Select wallet type</Text>

      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <TouchableOpacity
        style={styles.buttonFacebookStyle}>
        <Image
          source={require('../assets/30.png')}
          style={styles.buttonImageIconStyle}
        />
        <Text style={styles.buttonTextStyle}>{item.title}</Text>
        <Text style={styles.buttonTextStyle}>{item.description}</Text>
      </TouchableOpacity>



        // <TouchableOpacity style={styles.CardContainer}>
        //   <View>
        //     <Image
        //     source={require('../assets/30.png')}
        //     style={{ width:200, resizeMode:"contain"}}
        //     />
        //     <Text>{item.title}</Text>
        //     <Text>{item.description}</Text>
        //   </View>
        // </TouchableOpacity>

      )}

    />

    </View>




    // <View style={styles.container} behavior="padding">
    //     <Text style={styles.HelloText}>select wallet type</Text>

    //   <TouchableOpacity onPress={onStandbyWalletPress} style={styles.ButtonContainer}>
    //     <Text style={styles.ButtonText}>Standby Account</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={onOperationalWalletPress} style={styles.ButtonContainer}>
    //     <Text style={styles.ButtonText}>Operational Account</Text>
    //   </TouchableOpacity>


    //   <TouchableOpacity onPress={onNftBrokerPress} style={styles.ButtonContainer}>
    //     <Text style={styles.ButtonText}>nft broker</Text>
    //   </TouchableOpacity>

    // </View>
  )
}

export default WalletType

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      paddingBottom:30,
      paddingTop:120
    },


    buttonGPlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: '#fff',
      marginBottom: 4,
      marginLeft: 10,
    },

    HelloText:{
        color:'white',
        fontSize:25,
        fontWeight:700,
        textAlign:'left',
        paddingBottom:20,
        // paddingHorizontal:20,
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

  CardContainer: {
    // flex:1,
    backgroundColor: "#5659C6",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 140,
    marginBottom:10,
    height:100,
    // maxHeight:100,
    
},


  ButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: 500,
      alignSelf: "center",
  },

  });
  