import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, SafeAreaView, Keyboard, KeyboardAvoidingView, NativeModules, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
//import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import RNPickerSelect  from 'react-native-picker-select';

import DocumentPicker from 'react-native-document-picker';



//import { useForm } from './Form'

import { PaperSelect } from 'react-native-paper-select';

import SelectList from 'react-native-dropdown-select-list'



export const Pagina5jScreen = ({navigation}) => {


  const [stetes, setSat]= useState([]);
//interface Props extends StackScreenProps<any, any>{}

const [nombreempresa, setNombreEmpresa] = useState("");
global.nNombreempresa=nombreempresa;

const [nombrecomercial, setNombreComercial] = useState("");
global.nNombrecomercial=nombrecomercial;

const [direccionpostal, setDireccionPostal] = useState("");
global.nDirecccionpostal=direccionpostal;

const [ndocumento, setNDocumento] = useState("");
global.nTD=ndocumento;




const [errorEmail,setErrorEmail ] = useState("")
const [errorConfirm,setErrorConfirm ] = useState("")

const [otionsSelected1, setOptionsSelected1] = useState("");
const [otionsSelected2, setOptionsSelected2] = useState("");
const [otionsSelected3, setOptionsSelected3] = useState("");

const [otionsSelected4, setOptionsSelected4] = useState("");


 /*const [nombre_comercial, setNombre_comercial] = useState("");
 global.nombreComercial=nombre_comercial;*/

 /*const [pais, setPais] = useState("");*/
 //global.nPais=otionsSelected1;

 /*const [departamento, setDepartamento] = useState("");*/
 //global.nDepartamento=otionsSelected2;

 /*const [ciudad, setCiudad] = useState("");*/
 //global.nCiudad=otionsSelected3;


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


 //cargar documentos
 const [singleFile, setSingleFile] = useState("");

 const [singleFile2, setSingleFile2] = useState("");

 //global.nArchivo2=singleFile2;

 //global.nArchivo=singleFile;

    const [multipleFile, setMultipleFile] = useState([]);



    const registerUser =()=>{
      if(!validateData()){
        return;
      }
      navigation.replace('Pagina5Screen')
    }
    
    const validateData = () =>{
       setErrorConfirm("")
       setErrorEmail("")
       let isvalid = true

       if(!singleFile.name){
        Alert.alert(
          "Campo Obligatorio",
          "RUT \nDebes Adjuntar Documento en PDF",
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
       

  
       
    
       return isvalid
    }
    
    


  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  //cargar documentos
  const selectOneFile = async () =>{

    try{
        const [res] = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
            //DocumentPicker.types.pdf
            //DocumentPicker.types.images

        });
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : '  + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);

        setSingleFile(res);

        console.log("hola " + res.name)
        global.nArchivo=res.name

    } catch(err){

        if (DocumentPicker.isCancel(err)) {
            alert('Cancelado la selecion del documento');
        } else {
            alert ('error: ' + JSON.stringify(err));
            throw err;
        }

    }
};


const selectOneFile2 = async () =>{

  try{
      const [res] = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          //DocumentPicker.types.pdf
          //DocumentPicker.types.images

      });
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : '  + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);

      setSingleFile2(res);

      console.log("hola " + res.name)
      global.nArchivo2=res.name

  } catch(err){

      if (DocumentPicker.isCancel(err)) {
          alert('Cancelado la selecion del documento');
      } else {
          alert ('error: ' + JSON.stringify(err));
          throw err;
      }

  }
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
},[errorMessage]);


const [colors, setColors] = useState({
  value: '',
  list: [
    { _id: '1', value: 'BLUE' },
    { _id: '2', value: 'RED' },
    { _id: '3', value: 'GREEN' },
    { _id: '4', value: 'YELLOW' },
    { _id: '5', value: 'BROWN' },
    { _id: '6', value: 'BLACK' },
    { _id: '7', value: 'WHITE' },
    { _id: '8', value: 'CYAN' },
  ],
  selectedList: [],
  error: '',
});


const placeholder = {
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
  
};

const placeholder4 = {
  label: 'T.Doc',
  value: null,
  color: '#9EA0A4'
  
};


  return (
    <>
    
  {/*  <Background2 /> */}
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer_pagina4s}>
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Jurídica</Text>
        
        <TextInput
        value={nombreempresa}
        maxLength={20}
        minLength={2}
        onChangeText={(text) => setNombreEmpresa(text)}
        placeholder="Nombre de la Empresa"
        placeholderTextColor="gray"
        style={!errorEmail?[loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]:
          [loginStyles.inputField_pagina4_error_2,
            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
            ]}
     
       
            selectionColor="orange"
            autoCapitalize='none'
            autoCorrect={false}
        />


<Text></Text>
        
        <TextInput
        value={nombrecomercial}
        maxLength={20}
        minLength={2}
        onChangeText={(text) => setNombreComercial(text)}
        placeholder="Nombre Comercial"
        placeholderTextColor="gray"
        style={!errorEmail?[loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]:
          [loginStyles.inputField_pagina4_error_2,
            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
            ]}
     
       
            selectionColor="orange"
            autoCapitalize='none'
            autoCorrect={false}
        />


<Text></Text><Text></Text>

<TextInput
        value={direccionpostal}
        maxLength={20}
        minLength={2}
        onChangeText={(text) => setDireccionPostal(text)}
        placeholder="Dirección Principal"
        placeholderTextColor="gray"
        style={!errorEmail?[loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]:
          [loginStyles.inputField_pagina4_error_2,
            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
            ]}
     
       
            selectionColor="orange"
            autoCapitalize='none'
            autoCorrect={false}
        />
      

     {/*   <View style={styles.row}>

        <View style={[styles.box, styles.two]}>

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


            </View>


            
            
          </View> */}


          
<View style={styles.row}>


<View style={[styles.box, styles.two]}>


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

<View style={[styles.box, styles.two]}>


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
boxStyles={{borderColor:"black"}} //override default styles



/>



</View>





</View>


<View style={styles.row}>

<View style={[styles.box, styles.two]}>


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





</View>








<Text></Text>


<View style={styles.row}>

<View style={[styles.box_1, styles.two]}>

<View style={{ height:45, alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', backgroundColor: 'transparent'  }}>

<RNPickerSelect 
onValueChange={value => {
  setOptionsSelected4(value);
}}
placeholder={placeholder4}

items={[
{ label: 'NIT', value: 'NIT' }


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
    <View style={[styles.box_1, styles.box2]}>


   
<TextInput
 value={ndocumento}
 onChangeText={(text) => setNDocumento(text)}
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



<Text></Text>


          <View style={styles.row2}>

<View style={[styles.box_1, styles.box2]}>

<TextInput
placeholder="Adjuntar RUT"
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


  <View style={styles.row2}>

<View style={[styles.box_1, styles.box2]}>

<TextInput
placeholder="Adjuntar CAMARA COMERCIO"
value={singleFile2.name ? singleFile2.name : ''}
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
     onPress={selectOneFile2}
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


        
        <View style={loginStyles.buttonContainerco_5Sj}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
         // onPress={() => navigation.replace('Pagina5Screen')}       
         onPress={() => navigation.replace('Pagina6jScreen')} 
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>


        <View style={loginStyles.buttonContainer2aco_1_5Sj}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina4ajScreen')}
          activeOpacity={0.8}
         /* style={loginStyles.button_black_3}*/
        >
        {/*  <Text style={loginStyles.buttonText}>X</Text> */}
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
   // marginBottom: 10,
   top:"3%",
   // width:"90%",
    alignSelf:"center"
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
   
  },
  row2: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginBottom: 10,
   top:"2%",
   // width:"90%",
    alignSelf:"center"
  },
  box_1: {
    flex: 2,
   // height: 60,
    right: -2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});
