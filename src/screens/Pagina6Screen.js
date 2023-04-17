import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

import RNPickerSelect, { defaultStyles }  from 'react-native-picker-select';

import { Alert, Image,   SafeAreaView, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import DocumentPicker from 'react-native-document-picker';



//interface Props extends StackScreenProps<any, any>{}

export const Pagina6Screen = ({navigation}) => {

/*const [nacionalidad, setNacionalidad] = useState("");
global.nNacionalidad=nacionalidad;*/

/*const [tdoc, setTdoc] = useState("");
global.nTdoc=tdoc;*/

const [documento, setDocumento] = useState("");
global.nDocumento=documento;

const [singleFile, setSingleFile] = useState('');

const [errorEmail,setErrorEmail ] = useState("")


const [otionsSelected, setOptionsSelected] = useState("");
global.nTdoc=otionsSelected

const [errorConfirm,setErrorConfirm ] = useState("")

const registerUser =()=>{
  if(!validateData()){
    return;
  }
  navigation.replace('Pagina7Screen')
}

const validateData = () =>{
   setErrorConfirm("")
   setErrorEmail("")
   let isvalid = true

   if(!singleFile.name){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe ADJUNTAR EL DOCUMENTO",
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

   if(!documento){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "DOCUMENTO es obligatorio",
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

   if(!otionsSelected){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe seleccionar el TIPO DE CEDULA",
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


const selectOneFile = async () =>{

  try{
      const [res] = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          //DocumentPicker.types.pdf
          //DocumentPicker.types.images

      });
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);

      setSingleFile(res);

      global.nAdjuntar_2=res.name

  } catch(err){

      if (DocumentPicker.isCancel(err)) {
          alert('Cancelado la selecion del documento');
      } else {
          alert ('error: ' + JSON.stringify(err));
          throw err;
      }

  }
};


const placeholder2 = {
  label: 'T.Doc',
  value: null,
  color: '#9EA0A4'
  
};

  const {signUp, errorMessage, removeError} = useContext(AuthContext);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const placeholder = {
    label: 'Genero...',
    value: null,
    color: '#9EA0A4'
    
  };


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
    
   {/* <Background2 /> */}
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer_pagina6s}>
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Natural</Text>
        <Text style={loginStyles.label2}>Datos del documento</Text>
    
      

       


      
       {/*   <View style={styles.row}>

         <View style={[styles.box, styles.two]}>

     <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2F}
             onPress={() => setOpen(true)}
          >
              <Text style={loginStyles.buttonTextF}>AGREGAR FECHA</Text>
          </TouchableOpacity>
        
       
       
        <DatePicker
        
         mode="date"
         title="FECHA DE NACIMIENTO"
         confirmText="Agregar"
         cancelText="Cancelar"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      
  

         </View>    
       
       

           
          </View>*/}



          <View style={styles.row}>

        <View style={[styles.box_1, styles.two]}>

        <View style={{ height:45, alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', backgroundColor: 'transparent'  }}>

<RNPickerSelect 
onValueChange={value => {
  setOptionsSelected(value);
}}
placeholder={placeholder2}

items={[
{ label: ' • Cedula de Ciudadanía', value: 'Cedula de Ciudadanía' },
{ label: ' • Pasaporte', value: 'Pasaporte' },
{ label: ' • DNI', value: 'DNI' },
{ label: ' • Cedula de extranjerÍa', value: 'Cedula de extranjeria' },
{ label: ' • Tarjeta de identidad', value: 'Tarjeta de identidad' }

]}
style={{

 
inputAndroid: {
// backgroundColor: 'red',
borderColor:"black",
},


headlessAndroidPicker: {
borderColor:"black",
borderBottomColor:"red" 
}



}}
/>



</View>
        
      {/*  <TextInput
        value={tdoc}
        onChangeText={(text) => setTdoc(text)}
        placeholder="T.Doc"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

      */}

         </View>
            <View style={[styles.box_1, styles.box2]}>


           
        <TextInput
         value={documento}
         onChangeText={(text) => setDocumento(text)}
        placeholder="# Documento"
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

          <View style={styles.row}>

      
            
 
          </View>



          <View style={styles.row}>

        <View style={[styles.box_1, styles.box2]}>
        
        <TextInput
        placeholder="Adjuntar Documento"
        value={singleFile.name ? singleFile.name : ''}
        editable={false}
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>

         <View style={[styles.box_1, styles.two]}>
         <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button3white}
             onPress={selectOneFile}
          >

<Image 
         source={require('../assets/adjuntar.png')}
          style={{
              marginLeft:-15,
              width:45,
              height:45,
          }}
        />
              <Text style={loginStyles.buttonText2}>Cargar</Text>
          </TouchableOpacity>
        
            </View>
            
 
          </View>


          


    
          </View>


          <View style={loginStyles.buttonok_pagina6s}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
        //  onPress={() => navigation.replace('Pagina7Screen')}   
        onPress={() => registerUser()}        
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



          <View style={loginStyles.buttonx_pagina6s}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina5Screen')}
          activeOpacity={0.8}
       
        >
        
        <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>
         
        



   {/* <View style={loginStyles.buttonContainer4}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina5Screen')}
          activeOpacity={0.8}
        
        >
            <Image source={require('../assets/cerrar.png')} />
        </TouchableOpacity>
        </View> 
*/}



          
      {/*  <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina7Screen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>


<View style={loginStyles.buttonContainer4}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina5Screen')}
          activeOpacity={0.8}
          style={loginStyles.button_black_2}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>  

*/}

        
         
      
       

    </>
  )
}

const styles = StyleSheet.create({
  row: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginBottom: 10
    top:"3%",
  },
  box: {
    flex: 1,
    height: 60,
    right: 2
  },
  box_1: {
    flex: 2,
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
   
  }
});
