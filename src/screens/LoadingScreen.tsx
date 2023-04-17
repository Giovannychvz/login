import React,{useEffect} from 'react'
import { View } from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import { ActivityIndicator } from 'react-native-paper'

export const LoadingScreen = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[])
  
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
          <ActivityIndicator
            size={50}
            color="white"
          />
    </View>
  )
}
