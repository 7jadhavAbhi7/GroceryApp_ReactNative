import { View, Text,Image,ScrollView,TextInput,TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mycolor } from '../Utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../../firebaseconfig';
const Login = () => {
  const[isVisible,setisVisible]=useState(true);
  const nav=useNavigation()
  const [loginCredentials,setloginCredentials]=useState(
      {
          email:"",
          password:""
      }
  )
  const {email,password}=loginCredentials ;
  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((value) => {
        
          // AsyncStorage.setItem("id", "success");
          nav.replace("Home");
        
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView  style={{flex:1}}>
    <StatusBar></StatusBar>
    <ScrollView style={{flex:1}}>
        <Image source={require('../assets/salad.png')} style={{height:100,width:100,alignSelf:'center',marginTop:30}}></Image>

        <View style={{paddingHorizontal:20,marginTop:40,}}>
            <Text style={{fontWeight:'bold',fontSize:24}}>Login</Text>
            <Text style={{fontWeight:'600',fontSize:16,color:'grey',marginTop:20}}>Enter your Credential to continue</Text>
        </View>

        
        <View style={{paddingHorizontal:20,marginTop:30}}>
            <Text style={{fontWeight:'600',color:'grey',fontSize:18}}>Email</Text>
            <TextInput 
            value={email}
            onChangeText={(val) => {
              setloginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address" style={{borderColor:'grey',borderBottomWidth:1,fontSize:20,fontWeight:'normal',marginTop:20}} 
           ></TextInput>
        </View>
        <View style={{paddingHorizontal:20,marginTop:30}}>
            <Text style={{fontWeight:'600',color:'grey',fontSize:18}}>Password</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TextInput 
             value={password}
             onChangeText={(val) => {
               setloginCredentials({ ...loginCredentials, password: val });
             }}
            style={{borderColor:'grey',borderBottomWidth:1,fontSize:20,fontWeight:'normal',marginTop:20,flex:1}} maxLength={9}secureTextEntry={isVisible} ></TextInput>
            <FontAwesome onPress={()=>
                [setisVisible(!isVisible)]} name={isVisible==true?"eye-slash":"eye"} size={24} color="black" />
            </View>
            </View>
            <Text style={{textAlign:'right',paddingHorizontal:20,marginTop:30,fontSize:16}}>Forgot Password ?</Text>
            <View style={{paddingHorizontal:20,marginTop:20}}>
            <TouchableOpacity 
            onPress={(loginUser)}
            style={{backgroundColor:mycolor.primary,marginTop:30,padding:20,borderRadius:20,justifyContent:'center',alignItems:'center'}} >
            <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Login</Text>
           </TouchableOpacity>

            </View>
          
        
        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}><Text style={{alignSelf:'center',marginTop:20,fontSize:14}}>Don't have account? </Text>
        <TouchableOpacity  onPress={()=>{nav.navigate('Signup')}}><Text style={{color:'green',marginTop:20,fontSize:14}}>Signup</Text></TouchableOpacity></View>
        
    </ScrollView>
   </SafeAreaView>

  )
}

export default Login