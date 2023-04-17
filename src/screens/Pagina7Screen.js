import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import RNPickerSelect  from 'react-native-picker-select';

import SelectList from 'react-native-dropdown-select-list'

//interface Props extends StackScreenProps<any, any>{}

export const Pagina7Screen = ({navigation}) => {

  const [otionsSelected1, setOptionsSelected1] = useState("");
const [otionsSelected2, setOptionsSelected2] = useState("");
const [otionsSelected3, setOptionsSelected3] = useState("");

//ocultar
const [shouldShow, setShouldShow] = useState(false);



console.log("etadoo1 " + shouldShow);


global.nPais_2=otionsSelected1;
global.nDepartamento_2=otionsSelected2;
global.nCiudad_2=otionsSelected3;

const [direccion, setDireccion] = useState("");
global.nDireccion=direccion;

//select con buscador
const [selectedPa, setSelectedPa] = useState("");
global.nPais=selectedPa;

const data = [
  {key:'Colombia',value:'Colombia'},
  
];


//select con buscador
const [selectedDe, setSelectedDe] = useState("");
global.nDepartamento=selectedDe;

const dataDe = [
  {key:'Tolima',value:'Tolima'},
  
];


//select con buscador
const [selectedCi, setSelectedCi] = useState("");
global.nCiudad=selectedCi;

const dataCi = [
  {key:'Ibagué',value:'Ibagué'},
  
];

/*const [paisDireccion, setPaisDireccion] = useState("");
global.nPaisDireccion=paisDireccion;

const [departamentoDireccion, setDepartamentoDireccion] = useState("");
global.nDepartamentoDireccion=departamentoDireccion;

const [ciudadDireccion, setCiudadDireccion] = useState("");
global.nCiudadDireccion=ciudadDireccion;

const [indicativo, setIndicativo] = useState("");
global.nIndicativo=indicativo;

const [telefono, setTelefono] = useState("");
global.nTelefono=telefono;*/



/*const [pais_2, setPais_2] = useState("");
global.nPais_2=pais_2;

const [departamento_2, setDepartamento_2] = useState("");
global.nDepartamento_2=departamento_2;

const [ciudad, setCiudad] = useState("");
global.nCiudad=ciudad;*/


const [errorEmail,setErrorEmail ] = useState("")


const [errorConfirm,setErrorConfirm ] = useState("")


const registerUser =()=>{
  if(!validateData()){
    return;
  }
  navigation.replace('Pagina8Screen')
}

const validateData = () =>{
   setErrorConfirm("")
   setErrorEmail("")
   let isvalid = true


   if(!selectedCi){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe seleccionar la CIUDAD",
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


   if(!selectedDe){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe seleccionar el DEPARTAMENTO",
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


   if(!selectedPa){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe seleccionar el PÁIS",
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

   if(!direccion){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "DIRECCIÓN obligatorio",
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

  

/*const placeholder = {
  label: 'País',
  value: null,
  color: 'black',
 
  
};

const placeholder2 = {
  label: 'Dpto',
  value: null,
  color: 'black',
  
};

const placeholder3 = {
  label: 'Ciudad',
  value: null,
  color: 'black'
  
};*/

/*const selects =()=>{
  if(!selectedPa){
    setShouldShow(!shouldShow);
    console.log("cambioxxx  " + selectedPa)
    }
  }   

const selects2 =()=>{
  if(shouldShow== 1){ 
//setShouldShow(false);
      console.log("entro ........");
    }
  }*/

/*  
useEffect(() => {
  const interval = setInterval(() => {
    if(!selectedPa){
      setShouldShow(!shouldShow);
      console.log("cambioxxx  " + selectedPa)
      }
    
  }, 1000);
  return () => setInterval(interval);
}, []);
*/
console.log("cambio  " + selectedPa)

/*useEffect(() => {
  const interval = setInterval(() => {
    if(selectedPa ==""){
    setShouldShow(!shouldShow);
    }
  }, 1000);
  return () => setInterval(interval);
}, []); */

console.log("etadoo2 " + shouldShow);

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
    
  { /* <Background2 />*/ }    
    <WhiteLogo2 />


    
         
        <View style={loginStyles.formContainer_pagina6s}>
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Natural</Text>
        <Text style={loginStyles.label2}>Dirección Domicilio – Oficina</Text>
      

        


      
        <View style={styles.row}>

        <View style={[styles.box, styles.two]}>
        
        <TextInput
        value={direccion}
        onChangeText={(text) => setDireccion(text)}
        placeholder="Dirección"
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

      {/*    <View style={[styles.box, styles.two]}>

<View style={{  alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', height:45, backgroundColor: 'transparent' }}>

<RNPickerSelect 
    onValueChange={value => {
      setOptionsSelected1(value);
    }}
    placeholder={placeholder}
    
    items={[
        { label: 'Colombia', value: 'Colombia' }
    ]}
    style={{
  
      inputAndroid: {
     // backgroundColor: 'red',
       borderColor:"black",
       //fontSize:10
       
       //color:"black"

       
        
      },

      headlessAndroidPicker: {
        borderColor:"black",
        borderBottomColor:"red",
      }
    
     
    
    }}
/>


</View>

 </View>
            <View style={[styles.box, styles.box2]}>


           
            <View style={{  alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', height:45, backgroundColor: 'transparent'  }}>

<RNPickerSelect 
    onValueChange={value => {
      setOptionsSelected2(value);
    }}
    placeholder={placeholder2}
    
    items={[
        { label: 'Tolima', value: 'Tolima' }
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
            </View>

            <View style={[styles.box, styles.box3]}>

        
            <View style={{  alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', height:45,backgroundColor: 'transparent'  }}>

<RNPickerSelect 
   onValueChange={value => {
    setOptionsSelected3(value);
  }}
    placeholder={placeholder3}
    
    items={[
        { label: 'Ibagué', value: 'Ibagué' },
        { label: 'Espinal', value: 'Espinal' }
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

    </View> */}





<View style={[styles.box, styles.two]}>
<Text></Text>

<SelectList 
      onChangeText={() => {(text) => setSelectedPa(text)}}
      setSelected={setSelectedPa} 
      data={data}  
    //  arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
    //  searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={true} 
      searchPlaceholder="Digítalo acá"
      placeholder="País"
      dropdownItemStyles={{borderRadius:0,  borderColor:"black", margin:-4, padding:0}}
      dropdownStyles={{borderRadius:5, borderColor:"black",height:135, backgroundColor:"white"}}
      maxHeight={150}
      boxStyles={{borderColor:"black"}} //override default styles
      
      
      //defaultOption={{ key:'0', value:'Nacionalidad' }}   //default selected option
      
    />



 </View>


 

           
          </View>


          <View style={styles.row}>  
          {selectedPa != "" ? (      
<View style={[styles.box, styles.two]}>
<Text></Text>
<SelectList 
onChangeText={() => {(text) => setSelectedDe(text)}}
setSelected={setSelectedDe} 
data={dataDe}  
search={true} 
searchPlaceholder="Digítalo acá"
placeholder="Departamento"
dropdownItemStyles={{borderRadius:0,  borderColor:"black", margin:-4, padding:0}}
dropdownStyles={{borderRadius:5, borderColor:"black",height:135, backgroundColor:"white" }}
maxHeight={150}
boxStyles={{borderColor:"black"}}
/>
</View>


) : null}

     
    </View>

    


    <View style={styles.row}>
    {selectedDe != "" ? (

<View style={[styles.box, styles.two]}>
<Text></Text>


<SelectList 
onChangeText={() => {(text) => setSelectedCi(text)}}
setSelected={setSelectedCi} 
data={dataCi}  
search={true} 
searchPlaceholder="Digítalo acá"
placeholder="Ciudad"
dropdownItemStyles={{borderRadius:0,  borderColor:"black", margin:-4, padding:0}}
dropdownStyles={{borderRadius:5, borderColor:"black",height:135, backgroundColor:"white" }}
maxHeight={150}
boxStyles={{borderColor:"black"}} //override default styles



/>



</View>


) : null}

     
    </View>



{/*
    <View style={styles.row}>
        {shouldShow ? (
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{width: 250, height: 250}}
          />
        ) : null}
       

      </View>     

          */}        



         
            </View>
          
       


        <View style={loginStyles.buttonok_pagina7s}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
         // onPress={() => navigation.replace('RegisterFull')}   
        // onPress={() => navigation.replace('Pagina8Screen')}   
        onPress={() => registerUser()}    
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



          <View style={loginStyles.buttonx_pagina7s}>
        <TouchableOpacity
         onPress={() => navigation.replace('Pagina6Screen')}
       
          activeOpacity={0.8}
       
        >
        
        <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>

       

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
    //height: 60,
    right: 2,
    
   
    
  },
  box2: {
    left: 2
  },
  box3: {
    left: 6
  },
  two: {
    flex: 1,
   
    
   
  },row2: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginBottom: 10,
   top:"4%",
   // width:"90%",
    alignSelf:"center"
  },
  box_1: {
    flex: 2,
   // height: 60,
    right: -2
  }
});
