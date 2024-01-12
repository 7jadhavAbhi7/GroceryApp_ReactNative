import { View, Text,Image} from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View style={{paddingHorizontal:10}}>
      <Image source={require('../assets/pexels-erik-scheel-95425.jpg')} resizeMode={'cover'}
  style={{ width: '100%', height: 200,borderRadius:10}}></Image>
    </View>
  )
}

export default HomeBanner