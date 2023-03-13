import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

const data = [
  {
    id:"1",
    image:"../assets/30.png",
    title:"Mint NFTS",
    description:"Mint NFTokens to your operational wallet address",
    screen:"OwMintNft"
  },

  {
    id:"2",
    image:"../assets/30.png",
    title:"Burn NFTokens",
    description:"Burn NFTokens in your operational wallet address",
    screen:"OwMintNft"
  },

  {
    id:"3",
    image:"../assets/30.png",
    title:"Transfer NFT",
    description:"Get and Transfer NFTokens between accounts",
    screen:"TransferNftOw"
  },
]

const NftsOw = () => {
    const location = 'Lagos';

    const navigation = useNavigation();

    const onMintNftPress = () => {
      navigation.navigate('OwMintNft');
    };

    const onBurnTokensPress = () => {
      navigation.navigate('OwMintNft');
    };

    const onTransferNftPress = () => {
      navigation.navigate('TransferNftOw');
    };


  return (

    <View style={styles.container} behavior="padding">

    <Text style={styles.HelloText}>Explore NFTS</Text>

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

export default NftsOw

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
  