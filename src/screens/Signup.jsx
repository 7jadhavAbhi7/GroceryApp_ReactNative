import { View, Text,Image,ScrollView,TextInput,TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mycolor } from '../Utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../../firebaseconfig';
import { database } from '../../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from 'react-native-uuid';
const Signup = () => {
    const[isVisible,setisVisible]=useState(true);
    const nav=useNavigation()
    const [userCredentials,setUserCredentials]=useState(
        {
            email:"",
            password:""
        }
    )
    const uid=uuid.v4()

    const {email,password,name}=userCredentials
    const userAccount = () => {
        createUserWithEmailAndPassword(authentication, email, password)
          .then(() => {
            nav.navigate('Login')
           Alert.alert("User Account Created and Signed In!")
            setDoc(doc(database, "users",uid ), {
              username:name,
              email:email,
              id:authentication.currentUser.uid
            });
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              Alert.alert("That email address is already in use!");
            }
    
            if (error.code === "auth/invalid-email") {
              console.log("That email address is invalid!");
            }
    
            console.error(error);
          });
      };
  return (
   <SafeAreaView  style={{flex:1}}>
    <StatusBar></StatusBar>
    <ScrollView style={{flex:1}}>
        <Image source={require('../assets/salad.png')} style={{height:100,width:100,alignSelf:'center',marginTop:30}}></Image>

        <View style={{paddingHorizontal:30,marginTop:40,}}>
            <Text style={{fontWeight:'bold',fontSize:24}}>Sign Up</Text>
            <Text style={{fontWeight:'600',fontSize:16,color:'grey',marginTop:20}}>Enter your Credential to continue</Text>
        </View>

        <View style={{paddingHorizontal:20,marginTop:40}}>
            <Text style={{fontWeight:'600',color:'grey',fontSize:18}}>UserName</Text>
            <TextInput  keyboardType="name-phone-pad" style={{borderColor:'grey',borderBottomWidth:1,fontSize:20,fontWeight:'normal',marginTop:20}} maxLength={9} onChangeText={(val)=>{setUserCredentials({...userCredentials,name:val})}}></TextInput>
        </View>

        <View style={{paddingHorizontal:20,marginTop:30}}>
            <Text style={{fontWeight:'600',color:'grey',fontSize:18}}>Email</Text>
            <TextInput keyboardType="email-address" style={{borderColor:'grey',borderBottomWidth:1,fontSize:20,fontWeight:'normal',marginTop:20}} value={email}  onChangeText={(val)=>{
                setUserCredentials({...userCredentials,email:val})
            }}></TextInput>
        </View>

        <View style={{paddingHorizontal:20,marginTop:30}}>
            <Text style={{fontWeight:'600',color:'grey',fontSize:18}}>Password</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TextInput  value={password}
              onChangeText={(val) => {
                setUserCredentials({ ...userCredentials, password: val });
              }}
            style={{borderColor:'grey',borderBottomWidth:1,fontSize:20,fontWeight:'normal',marginTop:20,flex:1}} maxLength={9}secureTextEntry={isVisible} ></TextInput>
            <FontAwesome onPress={()=>
                [setisVisible(!isVisible)]} name={isVisible==true?"eye-slash":"eye"} size={24} color="black" />
            </View>
           
           <Text style={{marginTop:40,fontSize:16,fontWeight:'400',lineHeight:25,letterSpacing:0.7}}>By continuing you agree with our <Text style={{color:'green'}}>terms and conditions </Text> and  <Text style={{color:'green'}}>privacy policy</Text></Text>
           <TouchableOpacity style={{backgroundColor:mycolor.primary,marginTop:30,padding:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}  onPress={userAccount}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Sign up</Text>
           </TouchableOpacity>

        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}><Text style={{alignSelf:'center',marginTop:20}}>Already have account? </Text>
        <TouchableOpacity onPress={()=>{nav.navigate('Login')}}><Text style={{color:'green',marginTop:20}}>Login</Text></TouchableOpacity></View>
        
    </ScrollView>
   </SafeAreaView>
  )
}

export default Signup