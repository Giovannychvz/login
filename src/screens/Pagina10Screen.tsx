import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Image, Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { WhiteLogo3 } from '../components/WhiteLogo3'


import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';



interface Props extends StackScreenProps<any, any>{}

export const Pagina10Screen = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  const {email, password, password2, name, tipo_usuario,  onChange} = useForm({
    email:global.email_1,
    password:global.password,
    password2:global.password2,
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
    
   <WhiteLogo3 />
         
         <View style={loginStyles.formContainer3}>

         <Text style={loginStyles.title2_n}>Registro: Persona Natural</Text>
             
         <Collapse>
     <CollapseHeader>
     <View style={loginStyles.button_selectwhite2}>
         <Text style={loginStyles.paiss2}>Contraseña
Creada Correctamente</Text>
       <View style={loginStyles.flecha2_selecion}>
 
        
         
           <Image source={require('../assets/flechaok.png')} />
 
        
         
   </View> 
 
       </View>
     </CollapseHeader>
     <CollapseBody>
     
 
 
         
     </CollapseBody>
 </Collapse>
 
 
    
     
 
        
 
         <View style={loginStyles.buttonContainerColombia2}>
         <TouchableOpacity
          
           activeOpacity={0.8}>
 
 
 
         {/*  <Image source={require('../assets/colombia2.png')} /> */}
 
         </TouchableOpacity>
         </View>
 
 
 
         <Text style={loginStyles.title3}> {"\n"}{"\n"}
 
        </Text>
         
 
         <View style={loginStyles.buttonContainerco2_co}>
           <TouchableOpacity
              activeOpacity={0.8}
             // style={loginStyles.button_green}
             onPress={onRegister}
           >
              <Image source={require('../assets/guardar.png')} />
           {/* <Text style={loginStyles.buttonText}>Siguiente</Text>*/}
           </TouchableOpacity>
         </View>
          
         <View style={loginStyles.buttonContainer2aco2_co}>
         <TouchableOpacity
           onPress={() => navigation.replace('Pagina9Screen')}
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
