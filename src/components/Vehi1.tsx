import React from 'react'
import { Image, View } from 'react-native'

export const Vehi1 = () => {
  return (
    <View style={{
        alignItems:"center",
        paddingTop:50
    }}>
        <Image 
         source={require('../assets/plooy2.png')}
          style={{
              width:241,
              height:80,
          }}
        />

    </View>
  )
}
