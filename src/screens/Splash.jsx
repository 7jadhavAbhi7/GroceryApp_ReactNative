import { View, Text,Image} from 'react-native'
import React,{useEffect} from 'react'
import { mycolor } from '../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const nav=useNavigation()

    useEffect(()=>
    {
        setTimeout(()=>
        {
            nav.replace('Login')
        },2000)
    },[]
    )
  return (
    <View style={{backgroundColor:mycolor.primary,flex:1,justifyContent:'center'}}>
    <StatusBar style='light'></StatusBar>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Image style={{height:100,width:100,marginRight:18,tintColor:'white'}}source={require('../assets/salad.png')}></Image>
        <View >
        <Text style={{fontWeight:'bold',fontSize:34}}>RecGro</Text>
        <Text style={{fontWeight:'bold',fontSize:20}}>Buy More,Eat Healthy</Text>
        </View>
       
      </View>
    </View>
  )
}

export default Splash