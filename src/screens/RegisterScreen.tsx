import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  const {email, password, password2, name, tipo_usuario,  onChange} = useForm({
    email:'',
    password:'',
    password2:'',
    name:global.nombreComercial,
    tipo_usuario:'empresa',

   /* pais:global.nPais,
    departamento:global.nDepartamento,
    ciudad:global.nCiudad,

    apellidos:global.primerApellido + global.segundoApellido,
    nacionalidad: global.nNacionalidad,
    tdoc:global.nTdoc,
    documento:global.nDocumento,
    direccion: global.nCiudadDireccion */

});



useEffect(() => {
  if(errorMessage.length === 0) return;

  Alert.alert('Registro incorrecto',
               errorMessage,
               [
                 {
                   text: 'Ok',
                   onPress: removeError
                 }
               ]
               );
},[errorMessage])

const onRegister = () =>{
  if(password==password2) {
    
    console.log({name, email, password, tipo_usuario});
    Keyboard.dismiss();
    signUp({
        name: name,
        email: email,
        password: password,
        tipo_usuario: tipo_usuario
    })
}else{

  Alert.alert('Contraseñas no coinciden')
  
}

}
  return (
    <>
    
   {/* <Background2 /> */}
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer}>
            
        
   
    
        <Text style={loginStyles.label}>Email Asociado a la Cuenta – Recuperar Contraseña:</Text>
        <TextInput
        placeholder="Ingrese su email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        onChangeText={(value) => onChange(value,'email')}
        value={email}

        onSubmitEditing={onRegister}

        autoCapitalize='none'
        autoCorrect={false}
        />

       <Text style={loginStyles.label}>Contraseña:</Text>
        <TextInput
        placeholder="******"
        placeholderTextColor="gray"
        maxLength= {15}
       // secureTextEntry
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
         
        onChangeText={(value) => onChange(value,'password')}
        value={password}
        onSubmitEditing={onRegister}
        
        autoCapitalize='none'
        autoCorrect={false}
        />


     <Text style={loginStyles.label}>Volver a escribir Contraseña:</Text>
        <TextInput
        placeholder="******"
        placeholderTextColor="gray"
        maxLength= {15}
         // secureTextEntry
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
         
        onChangeText={(value) => onChange(value,'password2')}
        value={password2}
        onSubmitEditing={onRegister}

        autoCapitalize='none'
        autoCorrect={false}
        />


        




        
<View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button}
             onPress={onRegister}
          >
              <Text style={loginStyles.buttonText}>Registrar</Text>
          </TouchableOpacity>
      </View> 


        
         
        <View style={loginStyles.buttonContainer_register}>
        <TouchableOpacity
          onPress={() => navigation.replace('RegisterFull')}
          activeOpacity={0.8}
          style={loginStyles.button_black_2}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>

        

        </View>

        

       

    </>
  )
}
