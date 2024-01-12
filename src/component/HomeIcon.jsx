import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeIcon = () => {
    const nav=useNavigation()
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1 }} />
      <Image
        style={{ width: 100, height: 100, alignSelf: "center" }}
        source={require("../assets/salad.png")}
      />
      <TouchableOpacity onPress={()=>{
    nav.navigate('Cart')
      }} style={{ flex: 1, alignItems: "flex-end" }}>
        <AntDesign name="shoppingcart" size={34} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeIcon;
