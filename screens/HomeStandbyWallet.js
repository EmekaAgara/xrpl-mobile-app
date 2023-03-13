import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

const data = [
  {
    id:"1",
    image:"../assets/30.png",
    title:"Create Wallet",
    description:"Create a new standby wallet address with 1000 test tokens",
    screen:"NewSbWallet"
  },

  {
    id:"2",
    image:"../assets/30.png",
    title:"Send XRP",
    description:"Send XRP tokens to Operational wallet addresses",
    screen:"Sendxrp"
  },

  {
    id:"3",
    image:"../assets/30.png",
    title:"Create Trustline",
    description:"Create trustlines and send issued currency between accounts",
    screen:"CreateTrustlineSw"
  },

  {
    id:"4",
    image:"../assets/30.png",
    title:"Explore NFTs",
    description:"Mint, burn, and transfer NFTokens between accounts",
    screen:"Nfts"
  },

  {
    id:"5",
    image:"../assets/30.png",
    title:"My Wallet",
    description:"Get and check your wallet account details",
    screen:"MySbWallet"
  }
]

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

    const onWaletPress = () => {
      navigation.navigate('MySbWallet');
    };

  return (


    <View style={styles.container} behavior="padding">

    <Text style={styles.HelloText}>Standby Wallet Account</Text>

      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.ButtonContainer}>
            <Image
           source={require('../assets/30.png')}
           style={styles.cardImage}
         />
         <Text style={styles.mainText}>{item.title}</Text>
      <Text style={styles.descText}>{item.description}</Text>
     </TouchableOpacity>
      )}

    />

    </View>
  )
}

export default HomeStandbyWallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom:30,
    paddingTop:120,
    padding:6
  },


  HelloText:{
    color:'white',
    fontSize:25,
    fontWeight:700,
    textAlign:'left',
    paddingBottom:20
},

  cardImage: {
    padding: 55,
    margin:20,
    paddingBottom:30,
    height: 35,
    width: 35,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    position: 'absolute',
  },

  mainText:{
    color:'white',
    fontSize:16,
    fontWeight:700,
    textAlign:'left',
    paddingBottom:5,
    paddingLeft:90,
  },

  descText:{
    color:'#898A8B',
    fontSize:14,
    fontWeight:300,
    textAlign:'left',
    paddingLeft:90,
},

  ButtonContainer: {
    backgroundColor: "#141518",
    borderRadius: 5,
    paddingVertical: 30,
    paddingHorizontal: 40,
    marginBottom:10,
    
},

CardContainer: {
  backgroundColor: "#5659C6",
  borderRadius: 5,
  paddingVertical: 20,
  paddingHorizontal: 140,
  marginBottom:10,
  height:100,  
},

  });
  