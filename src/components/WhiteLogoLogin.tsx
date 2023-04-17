import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogoLogin = () => {
  return (
    <View style={{
        alignItems:"center"
    }}>
       {/* <Image 
         source={require('../assets/plooy3.png')}
          style={{
            top:20,
              width:190,
              height:51
          }}
        />*/}

<Image 
         source={require('../assets/plooy4.png')}
         style={{
            
              top:45,
             // right:167,
              width:150,
              height:215
          }}
        /> 

    </View>
  )
}
