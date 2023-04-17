import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { Pagina4Screen } from './Pagina4Screen'

import  ImageScreen  from '../screens/ImageScreen'

import RNPickerSelect  from 'react-native-picker-select';

//interface Props extends StackScreenProps<any, any>{}





export const Pagina9Screen = ({navigation} ) => {

/*const [primer_nombre, setPrimer_nombre] = useState("");
global.primerNombre=primer_nombre;*/

const {password, password2, onChange} = useForm({
    password:'',
    password2:''
});

global.password=password;
global.password2=password2;



const onLogin = () =>{
    console.log({password, password2});
    Keyboard.dismiss();
    signIn({password2: password2, password: password});
}

//show clave
const [seePassword, setSeePassword] = useState(true);

const [seePassword2, setSeePassword2] = useState(true);




/*const [email_1, setEmail_1] = useState("");
global.email_1=email_1;*/

/*const [segundo_nombre, setSegundo_nombre] = useState("");
global.segundoNombre=segundo_nombre;*/



/*const [primer_apellido, setPrimer_apellido] = useState("");
global.primerApellido=primer_apellido;*/


/*const [email_2, setEmail_2] = useState("");
global.email_2=email_2;*/


/*const [segundo_apellido, setSegundo_apellido] = useState("");
global.segundoApellido=segundo_apellido;*/



/*const [nombre_comercial, setNombre_comercial] = useState("");
global.nombreComercial=nombre_comercial;*/

/*const [pais_1, setPais_1] = useState("");
global.nPais_1=pais_1;*/

/*const [departamento_1, setDepartamento_1] = useState("");
global.nDepartamento_1=departamento_1;*/

/*const [celulara, setCelulara] = useState("");
global.celulara=celulara;*/

/*const [ciudad, setCiudad] = useState("");
global.nCiudad=ciudad;*/

/*const [celular, setCelular ] = useState("")*/

const [errorPassword,setErrorPassword ] = useState("")


const [errorConfirm,setErrorConfirm ] = useState("")

const registerUser =()=>{
  if(!validateData()){
    return;
  }
  navigation.replace('Pagina10Screen')
}

const validateData = () =>{
   setErrorConfirm("")
   setErrorPassword("")
   let isvalid = true


   if(!password){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "CONTRASEÑA obligatoria",
      [
        {
          text: "Aceptar",
          style: "cancel",
          
        },
      ],
      {
        cancelable: true,
       
      }
    );
    isvalid = false
   }

   setErrorPassword("*")


   if(password!== password2){
    Alert.alert(
      "DATOS NO COINCIDEN",
      "Las contraseñas deben ser Iguales,           favor realizar la corrección.",
      [
        {
          text: "Aceptar",
          style: "cancel",
          
        },
      ],
      {
        cancelable: true,
       
      }
    );
    isvalid = false
   }

   setErrorPassword("*")


   return isvalid
}



  const {signUp, errorMessage, removeError} = useContext(AuthContext);

 

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

  return (
    <>
    
  {/*  <Background2 /> */ }
    
    <WhiteLogo2 />
    

         
        <View style={loginStyles.formContainer_pagina4s}>
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Natural</Text>
        
    

        <View style={loginStyles.imgCentrar}>
        <ImageScreen  /> 
        </View>
            
      
    
      
        <Text style={loginStyles.label29}>Crear Contraseña</Text>
       
        <View style={styles.row}>

        
    
       
<View style={[styles.box, styles.two]}>



<Text style={loginStyles.labelblancoLogin}></Text>
       <View style={loginStyles.passwordContainer}>
        <TextInput
        placeholder="Digitar Contraseña"
        placeholderTextColor="gray"
        secureTextEntry={seePassword}
        style={[loginStyles.inputFieldLogin9,
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
 </View>
 </View>

      


  

 <View style={styles.row}>
<View style={[styles.box, styles.two]}>
<Text style={loginStyles.labelblancoLogin}></Text>
       <View style={loginStyles.passwordContainer}>
        <TextInput
        placeholder="Repetir Contraseña"
        placeholderTextColor="gray"
        secureTextEntry={seePassword2}
        style={[loginStyles.inputFieldLogin9,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange" 
        onChangeText={(value) => onChange(value,'password2')}
        value={password2}
         onSubmitEditing={onLogin}
        autoCapitalize='none'
        autoCorrect={false}   
        />
<TouchableOpacity 
       style={loginStyles.eye}
        onPress={()=> setSeePassword2(!seePassword2)}>
          <Image source=
           {seePassword2 
        ? require('../assets/eye.png'):
         require('../assets/eye2.png') } />
        </TouchableOpacity>  
  </View>

 
 </View>



 </View>


           

      

{/*  

<TextInput
//value={email_1}
onPress={()=> setSeePassword(!seePassword)}
//onChangeText={(text) => setEmail_1(text)}
placeholder="Digitar Contraseña"
placeholderTextColor="gray"
style={!errorEmail?[loginStyles.inputField_pagina4,
  (Platform.OS == 'ios') && loginStyles.inputFieldIOS
  ]:
  [loginStyles.inputField_pagina4_error,
    (Platform.OS == 'ios') && loginStyles.inputFieldIOS
    ]}
selectionColor="orange"
secureTextEntry={seePassword}
autoCapitalize='none'
autoCorrect={false}
/>

*/}

          






           
          </View>

          
     

        <View style={loginStyles. buttonContainerco9s}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
         // onPress={() => navigation.replace('RegisterFull')}   
         onPress={() => registerUser()}        
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



        <View style={loginStyles.buttonContainer2aco5s29}>
        <TouchableOpacity
          onPress={() => navigation.replace('RegisterFull')}
          activeOpacity={0.8}
         /* style={loginStyles.button_black_3}*/
        >
        {/*  <Text style={loginStyles.buttonText}>X</Text> */}
        <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>


        
         
       {/* <View style={loginStyles.buttonContainer3}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina4Screen')}
          activeOpacity={0.8}
          style={loginStyles.button_black_2}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
</View> */}
     

          

     






     

    </>
  )
}

const styles = StyleSheet.create({
  row: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  
   // marginBottom: 10
    top:"40%",
   alignContent:"center"
  },
  box: {
    flex: 1,
    height: 60,
    right: 2
  },
  box2: {
    left: 2
   
  },
  box3: {
    left: 6
  },
  two: {
    flex: 1
   
  },row2: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginBottom: 10,
   top:"4%",
  //  width:"20%",
    alignSelf:"center"
  },
  box_1: {
    flex: 2,
    top:"-1%",
   // height: 60,
    //right: -2
  },

  row3: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginBottom: 10,
   top:"4%",

   width:"50%",
  //  width:"20%",
    alignSelf:"center"
  }
});
