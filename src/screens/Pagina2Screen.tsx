import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo3 } from '../components/WhiteLogo3'
import { WhiteLogoLogin2 } from '../components/WhiteLogoLogin2'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screen = ({navigation}: Props) => {

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:''
});

const onRegister = () =>{
    console.log({name, email, password});
    Keyboard.dismiss();
}
  return (
    <>
    
   {/* <Background2 /> */}
    
    <WhiteLogo3 />
         
        <View style={loginStyles.formContainer}>
            
        
   
        <WhiteLogoLogin2 /> 

        <Text style={loginStyles.title3}>REGISTRO {"\n"}{"\n"}

        Exclusivo Para Empresas – 
Organizadores, Prestadores de 
Servicios.</Text>
        

        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}
            // onPress={() => navigation.replace('Pagina2Screenc')}
            onPress={() => navigation.replace('Pagina3Screen')}
          >
             <Image source={require('../assets/guardar.png')} />
          {/* <Text style={loginStyles.buttonText}>Siguiente</Text>*/}
          </TouchableOpacity>
        </View>
         
        <View style={loginStyles.buttonContainer2a}>
        <TouchableOpacity
          onPress={() => navigation.replace('LoginScreen')}
          
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>

        

        </View>

       

    </>
  )
}
