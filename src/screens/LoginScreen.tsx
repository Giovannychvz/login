import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Image, Text,  View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BackgrounLogin } from '../components/BackgrounLogin'
import { WhiteLogoLogin } from '../components/WhiteLogoLogin'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import { TextInput } from 'react-native-paper';

//import { Icon } from 'react-native-elements';

interface Props extends StackScreenProps<any, any>{

}

export const LoginScreen = ({navigation}: Props) => {

  const {signIn, errorMessage, removeError} = useContext (AuthContext) ; 

  //show clave
   const [seePassword, setSeePassword] = useState(true);


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

  return (
    <>
       <BackgrounLogin /> 

        <KeyboardAvoidingView
         style={{flex:1}}
         behavior={(Platform.OS === 'ios') ? 'padding': 'height'}
        > 

<WhiteLogoLogin />


        <View style={loginStyles.formContainerLogin}>
       
            

        <Text style={loginStyles.titleblancoLogin}>TU PARCERO VIAJES</Text>

        <Text style={loginStyles.labelblanco}></Text>
        <View style={loginStyles.passwordContainer}>
        <TextInput
        placeholder="USUARIO O CONDUCTOR "
        placeholderTextColor="gray"
        keyboardType="email-address"
        //underlineColorAndroid="black"
        style={[loginStyles.inputFieldLogin,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        onChangeText={(value) => onChange(value,'email')}
        value={email}

        onSubmitEditing={onLogin}

        autoCapitalize='none'
        autoCorrect={false}
        />
        <TouchableOpacity 
       style={loginStyles.eye}
       >
          <Image source={require('../assets/user.png')} />
        </TouchableOpacity>
        </View>

       <Text style={loginStyles.labelblancoLogin}></Text>
       <View style={loginStyles.passwordContainer}>
        <TextInput
        placeholder="CONTRASEÑA"
        placeholderTextColor="gray"
        secureTextEntry={seePassword}
        
        /*right={<TextInput.Icon onPress={onLogin} name='eye' />}*/
       
        //underlineColorAndroid="black"
        style={[loginStyles.inputFieldLogin2,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
         
        onChangeText={(value) => onChange(value,'password')}
        value={password}
        onSubmitEditing={onLogin}

        autoCapitalize='none'
        autoCorrect={false}
    
        />


<TouchableOpacity 
       style={loginStyles.eye}
        onPress={()=> setSeePassword(!seePassword)}>
          <Image source=
           {seePassword 
        ? require('../assets/eye.png'):
         require('../assets/eye2.png') } />
        </TouchableOpacity>
       
       
        </View>

       


<Text style={loginStyles.labelblancoLogin2}>Recuperar Password</Text>

        <View style={loginStyles.buttonContainerLogin}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.buttonLogin}
             onPress={onLogin}
          >
              <Text style={loginStyles.buttonTextLogin}>INICIAR SESIÓN</Text>
          </TouchableOpacity>

          <Text>v4</Text>
        </View>

    

        
        <View style={loginStyles.newUserContainer}>
         <TouchableOpacity
           activeOpacity={0.8}
           style={loginStyles.button_register_2}
           onPress={()=>navigation.replace('RegisterFull')}
         >
             <Text style={loginStyles.buttonText_2}>REGISTRARSE</Text>

         </TouchableOpacity>
        </View>

      {/*  <View style={loginStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('LoginScreen0')}
          activeOpacity={0.8}
          style={loginStyles.button_black_3b}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View> */}
        

        </View>
 </KeyboardAvoidingView> 

    </>
  )
}
