import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//Agregar menu superior
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Vehi1 } from '../components/Vehi1'
import { WhiteLogo4 } from '../components/WhiteLogo4'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'


interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen4 = ({navigation}:Props) => {

  const {user, token, logOut} = useContext(AuthContext);

  //const {tipousuario} = user;

  return (
    <>
    <Text>dos</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title:{
    fontSize: 20,
    marginBottom:20
  }
})
