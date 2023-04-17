import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { Pagina4Screen } from './Pagina4Screen'

import RNPickerSelect  from 'react-native-picker-select';

//interface Props extends StackScreenProps<any, any>{}





export const Pagina7jScreen = ({navigation} ) => {

/*const [primer_nombre, setPrimer_nombre] = useState("");
global.primerNombre=primer_nombre;*/

const [email_1, setEmail_1] = useState("");
global.email_1=email_1;

/*const [segundo_nombre, setSegundo_nombre] = useState("");
global.segundoNombre=segundo_nombre;*/



/*const [primer_apellido, setPrimer_apellido] = useState("");
global.primerApellido=primer_apellido;*/


const [email_2, setEmail_2] = useState("");
global.email_2=email_2;


/*const [segundo_apellido, setSegundo_apellido] = useState("");
global.segundoApellido=segundo_apellido;*/



/*const [nombre_comercial, setNombre_comercial] = useState("");
global.nombreComercial=nombre_comercial;*/

const [pais_1, setPais_1] = useState("");
global.nPais_1=pais_1;

/*const [departamento_1, setDepartamento_1] = useState("");
global.nDepartamento_1=departamento_1;*/

const [celulara, setCelulara] = useState("");
global.celulara=celulara;

/*const [ciudad, setCiudad] = useState("");
global.nCiudad=ciudad;*/

const [celular, setCelular ] = useState("")

const [errorEmail,setErrorEmail ] = useState("")


const [errorConfirm,setErrorConfirm ] = useState("")

const registerUser =()=>{
  if(!validateData()){
    return;
  }
  navigation.replace('RegisterFullj')
}

const validateData = () =>{
   setErrorConfirm("")
   setErrorEmail("")
   let isvalid = true


   if(!celular){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "CELULAR obligatorio",
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

   setErrorEmail("*")


   if(celular !== celulara){
    Alert.alert(
      "CAMPOS IGUALES",
      "Los CELULARES deben ser iguales",
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

   setErrorEmail("*")


   if(!email_1){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "EMAIL obligatorio",
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

   setErrorEmail("*")


   if(email_1 !== email_2){
    Alert.alert(
      "CAMPOS IGUALES",
      "Los EMAIL deben ser iguales",
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

   setErrorEmail("*")

   return isvalid
}

const placeholder = {
  label: 'País',
  value: null,
  color: '#9EA0A4'
  
};

const placeholder2 = {
  label: 'Genero',
  value: null,
  color: '#9EA0A4'
  
};

const placeholder3 = {
  label: 'Ciudad',
  value: null,
  color: '#9EA0A4'
  
};

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
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Jurídica</Text>
        <Text style={loginStyles.label2}>Email Asociado a la cuenta - Recuperar Contraseña</Text>
      

       


        <View style={styles.row}>

<View style={[styles.box, styles.two]}>

<TextInput
value={email_1}
onChangeText={(text) => setEmail_1(text)}
placeholder="Email Asociado a Cuenta PLOOY"
placeholderTextColor="gray"
style={!errorEmail?[loginStyles.inputField_pagina4,
  (Platform.OS == 'ios') && loginStyles.inputFieldIOS
  ]:
  [loginStyles.inputField_pagina4_error,
    (Platform.OS == 'ios') && loginStyles.inputFieldIOS
    ]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}
/>

 </View>
  
   
  </View>


  <Text style={loginStyles.label_pagina8s}>Repetir Email</Text>

        <View style={styles.row}>

        
        <View style={[styles.box, styles.two]}>
        
        <TextInput
       value={email_2}
       onChangeText={(text) => setEmail_2(text)}
        placeholder="Email Asociado a Cuenta PLOOY"
        placeholderTextColor="gray"
        style={!errorEmail?[loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]:
          [loginStyles.inputField_pagina4_error,
            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
            ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>
          
</View>


<Text style={loginStyles.label2}># Celular Asociado a la cuenta PLOOY</Text>
             

      

        <View style={styles.row}>

        <View style={[styles.box_1, styles.two]}>

       
        
        
        
     <TextInput
       value="+57"
       // onChangeText={(text) => setPais(text)}
       // placeholder="Dia"
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        keyboardType='numeric'
        autoCorrect={false}
      /> 
        
      
         </View>
         <View style={[styles.box_1, styles.box2]}>



           
 <TextInput
       value={celular}
       onChangeText={(text) => setCelular(text)}
        placeholder="Número Celular"
        placeholderTextColor="gray"
        style={!errorEmail?[loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]:
          [loginStyles.inputField_pagina4_error,
            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
            ]}
        selectionColor="orange"
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
      />
            </View>
            


            
            
          </View>




          <Text style={loginStyles.label_pagina8s}>Repetir Número de Celular</Text>

          <View style={styles.row}>

<View style={[styles.box_1, styles.two]}>





<TextInput
value="+57"
onChangeText={(text) => setPais_1(text)}
//placeholder="Dia"
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
keyboardType='numeric'
autoCorrect={false}
/> 


 </View>
 <View style={[styles.box_1, styles.box2]}>



   
<TextInput
value={celulara}
onChangeText={(text) => setCelulara(text)}
placeholder="Número Celular"
placeholderTextColor="gray"
style={!errorEmail?[loginStyles.inputField_pagina4,
  (Platform.OS == 'ios') && loginStyles.inputFieldIOS
  ]:
  [loginStyles.inputField_pagina4_error,
    (Platform.OS == 'ios') && loginStyles.inputFieldIOS
    ]}
selectionColor="orange"
keyboardType='numeric'
autoCapitalize='none'
autoCorrect={false}
/>
    </View>
    


    
    
  </View>







           
          </View>

          
     

        <View style={loginStyles.buttonContainerco5s}>
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



        <View style={loginStyles.buttonContainer2aco5s2}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina6jScreen')}
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
   top:"3%",
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
