import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import { RadioButton } from 'react-native-paper';
import { WhiteLogoEspanol } from '../components/WhiteLogoEspanol'
import { WhiteLogo_1 } from '../components/WhiteLogo_1'
import { CommonActions } from '@react-navigation/native'

interface Props extends StackScreenProps<any, any>{

}

export const LoginScreen0 = ({navigation}: Props) => {

  const {signIn, errorMessage, removeError} = useContext (AuthContext) ; 


    const {email, password, onChange} = useForm({
        email:'',
        password:''
    });

    useEffect(() => {
         if(errorMessage.length === 0) return;

         Alert.alert('Login incorrecto',
                      errorMessage,
                      [
                        {
                          text: 'Ok',
                          onPress: removeError
                        }
                      ]
                      );
    },[errorMessage])

    const onLogin = () =>{
        console.log({email, password});
        Keyboard.dismiss();
        signIn({correo: email, password: password});
    }


    const [value, setValue] = React.useState('');

    const [changeScreen, setChangeScreen] = useState(false)

    // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
       CommonActions.reset({
         index: 1,
         routes: [{ name: 'LoginScreen' }],
       })
     );
    }, 5000)
  }, [])


     

  return (
    <>

        <Background />
       

        <KeyboardAvoidingView
         style={{flex:1}}
         behavior={(Platform.OS === 'ios') ? 'padding': 'height'}
        >

        <View style={loginStyles.formContainer}>
            
              
   
        <WhiteLogo />


      

        {value === "first" && (
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button_green2}
             
          onPress={() => navigation.replace('LoginScreen')}

             
          >
            <WhiteLogoEspanol />  
          <Text style={loginStyles.buttonText}>CLIC</Text> 
          </TouchableOpacity>

        </View>

)}



       


       
        </View>

        </KeyboardAvoidingView>

    </>
  )
}
