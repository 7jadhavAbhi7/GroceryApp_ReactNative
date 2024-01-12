import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import { mycolor } from "../Utils/MyColors";
import { StatusBar } from "expo-status-bar";



const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price;
  });

  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 15,
        marginTop:30
      }}
    >
      <StatusBar></StatusBar>
      
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1 }} />
      <Text style={{fontWeight:'600',fontSize:24}}>My Cart</Text>
      <TouchableOpacity onPress={()=>{
    nav.goBack()
      }} style={{ flex: 1, alignItems: "flex-end" }}>
        <AntDesign name="back" size={34} color="black" />
      </TouchableOpacity>
    </View>
      
      <View
        style={{
          flex: 0.93,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{}}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(18),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
            >
              {/* ///Child 1 */}

              <View
                style={{
                  flex: 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "contain" }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>

              {/* ///Child 2 */}
              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <AntDesign
                    name="close"
                    size={25}
                    color="grey"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </View>
                <Text style={{ fontSize: 17, color: "grey", marginTop: 5 }}>
                  {item.pieces}, Price
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",

                    marginTop: 10,
                  }}
                >
                  {/* ///Quantity Container// */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <AntDesign
                      name="minuscircleo"
                      size={28}
                      color={mycolor.primary}
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={28}
                      color={mycolor.primary}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>

                  {/* ///Quantity Container// */}

                  <Text style={{ fontSize: 22, fontWeight: "600" }}>
                    ₹ {item.quantity * item.price}
                  </Text>
                </View>
              </View>

              {/* ///Child 2 */}
            </View>
          )}
        />
      </View>

      <View>
      <TouchableOpacity style={{alignSelf:'center',justifyContent:'center',backgroundColor:mycolor.primary,paddingHorizontal:80,height:70,borderRadius:10}} onPress={()=>{
        nav.navigate('Orderplaced')
      }}>
  <Text>Pay Now</Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;