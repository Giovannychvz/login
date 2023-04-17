import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems:"center"
    }}>
        {/*<Image 
         source={require('../assets/plooy3.png')}
          style={{
            top:120,
              width:190,
              height:51
          }}
        />*/}

<Image 
         source={require('../assets/plooy4.png')}
         style={{
            
              top:40,
             // right:167,
              width:209,
              height:300
          }}
        /> 

    </View>
  )
}
