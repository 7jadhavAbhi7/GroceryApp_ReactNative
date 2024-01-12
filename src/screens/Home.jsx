import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsCarousel from "../component/ProductsCarousel";
import HomeSearch from "../component/HomeSearch";
import HomeBanner from "../component/HomeBanner";
import { fruits, vegetables } from "../Utils/data";
import ProductsTitle from "../component/ProductsTitle";
import { mycolor } from "../Utils/MyColors";
import HomeIcon from "../component/HomeIcon";
import { StatusBar } from "expo-status-bar";
const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop:20
      }}
    >
      <StatusBar></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View style={{ gap: 20, paddingBottom: 20 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductsTitle title="Exclusive Offer" />
          <ProductsCarousel data={fruits} />
          <ProductsTitle title="Best Selling" />
          <ProductsCarousel data={vegetables} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;