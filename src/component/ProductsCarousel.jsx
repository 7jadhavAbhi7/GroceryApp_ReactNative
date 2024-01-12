import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/CartSlice";
import { fruits } from "../Utils/data";
import { mycolor } from "../Utils/MyColors";

const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            activeOpacity={0.7}
            style={{
              height: responsiveHeight(28),
              borderWidth: 2,
              borderColor: "#E3E3E3",
              width: responsiveWidth(45),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{
                height: 125,
                width: 125,
                alignSelf: "center",
                resizeMode: "contain",
              }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingHorizontal: 10, gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ color: "grey" }}>{item.pieces} Priceg</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  ₹ {item.price}
                </Text>
                {storeData.some((value) => value.name == item.name) ? (
                  <FontAwesome
                    name="minus-square"
                    size={33}
                    color={mycolor.primary}
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                ) : (
                  <FontAwesome
                    name="plus-square"
                    size={33}
                    color={mycolor.primary}
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;