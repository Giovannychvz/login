import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert,  Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { Pagina4Screen } from './Pagina4Screen'

import RNPickerSelect  from 'react-native-picker-select';

//select con buscador
import SelectList from 'react-native-dropdown-select-list'

import DatePicker from 'react-native-date-picker';

//import { Select }  from '@mobile-reality/react-native-select-pro';
//import es from 'date-fns/locale/es';

//import {Picker} from '@react-native-picker/picker';

//interface Props extends StackScreenProps<any, any>{}




export const Pagina5Screen = ({navigation}) => {



const [primer_nombre, setPrimer_nombre] = useState("");
global.primerNombre=primer_nombre;

const [segundo_nombre, setSegundo_nombre] = useState("");
global.segundoNombre=segundo_nombre;

const [primer_apellido, setPrimer_apellido] = useState("");
global.primerApellido=primer_apellido;

const [segundo_apellido, setSegundo_apellido] = useState("");
global.segundoApellido=segundo_apellido;



/*const [nombre_comercial, setNombre_comercial] = useState("");
global.nombreComercial=nombre_comercial;

const [pais, setPais] = useState("");
global.nPais=pais;

const [departamento, setDepartamento] = useState("");
global.nDepartamento=departamento;

const [ciudad, setCiudad] = useState("");
global.nCiudad=ciudad;*/


const [selectedLanguage, setSelectedLanguage] = useState();

const [date, setDate] = useState(new Date('1990-12-31'));
const [fechaFormato, setFechaFormato] = useState('Día/Mes/Año');

/*const [nacimiento, setNacimiento] = useState('');

const [genero, setGenero] = useState('');*/

const [errorEmail,setErrorEmail ] = useState("")
const [errorPrimerApellido,setErrorPrimerApellido ] = useState("")
const [errorFechaN,setErrorFechaN ] = useState("")
const [errorNacionalidad,setErrorNacionalidad ] = useState("")
const [errorGenero,setErrorGenero ] = useState("")

const [otionsSelected, setOptionsSelected] = useState("");
global.nGenero=otionsSelected

const [errorConfirm,setErrorConfirm ] = useState("")

//select con buscador
const [selected, setSelected] = useState("");
global.nNacionalidad=selected

console.log("select ok " + selected )

const data = [
  {key:'Colombia',value:'Colombia'},
  {key:'Venezuela',value:'Venezuela'},
  {key:'Chile',value:'Chile'},
  {key:'Argentina',value:'Argentina'},
  {key:'Brasil',value:'Brasil'},
  {key:'Peru',value:'Peru'},
  {key:'Mexico',value:'Mexico'},
  {key:'Uruguay',value:'Uruguay'},
  {key:'Bolivia',value:'Bolivia'},
  {key:'Estados unidos',value:'Estados unidos'},
  {key:'Ecuador',value:'Ecuador'},
  {key:'Costa rica',value:'Costa rica'},
  {key:'España',value:'España'},
  {key:'Francia',value:'Francia'},
  {key:'Portugal',value:'Portugal'},
  {key:'Italia',value:'Italia'},
  {key:'Qatar',value:'Qatar'},
  {key:'Escocia',value:'Escocia'},
  {key:'Inglaterra',value:'Inglaterra'},
  {key:'Cuba',value:'Cuba'},
  {key:'Polonia',value:'Polonia'},
  {key:'Jamaica',value:'Jamaica'},
  {key:'Puerto rico',value:'Puerto rico'},
  {key:'Africa',value:'Africa'},
  {key:'Japon',value:'Japon'},
  {key:'China',value:'China'},
  {key:'Corea del sur',value:'Corea del sur'},
  {key:'Corea del Norte',value:'Corea del Norte'},
];

const registerUser =()=>{
  if(!validateData()){
    return;
  }
  navigation.replace('Pagina6Screen')
}

const validateData = () =>{
   setErrorConfirm("")
   setErrorEmail("")
   setErrorPrimerApellido("")
   setErrorFechaN("")
   setErrorNacionalidad("")
   setErrorGenero("")
   let isvalid = true


   if(!otionsSelected){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "Debe seleccionar el GENERO",
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




   if(!selected){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "NACIONALIDAD es obligatoria",
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

   setErrorNacionalidad("*")

   
   if(fechaFormato == "Día/Mes/Año"){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "FECHA DE NACIMIENTO es obligatorio",
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

   setErrorFechaN("*")

  

   

   if(!primer_apellido){
    
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "PRIMER APELLIDO es obligatorio",
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

   setErrorPrimerApellido("*")


   if(primer_apellido.length < 2){
    
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "PRIMER APELLIDO debe llevar minimo 2 caracteres",
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

   setErrorPrimerApellido("*")


   if(!primer_nombre){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "PRIMER NOMBRE es obligatorio",
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


   if(primer_apellido.length < 2){
    Alert.alert(
      "CAMPO OBLIGATORIO",
      "PRIMER NOMBRE debe llevar minimo 2 caracteres",
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

  const [open, setOpen] = useState(false)

const formatFecha = fecha => {
  setDate(fecha);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  setFechaFormato(`${dia}/${mes}/${anio}`);
};
  


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
         
        <View style={loginStyles.formContainer_pagina6s}>
            
               

        <Text style={loginStyles.title2_n}>Registro: Persona Natural</Text>
        <Text style={loginStyles.label2}>Nombres y Apellidos</Text>
      

       


        <View style={styles.row}>

<View style={[styles.box, styles.two]}>

<TextInput
value={primer_nombre}
onChangeText={(text) => setPrimer_nombre(text)}
placeholder="Primer Nombre"
placeholderTextColor="gray"

style={!errorEmail?[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]:
[loginStyles.inputField_pagina4_error,
  (Platform.OS == 'ios') && loginStyles.inputFieldIOS
  ]
}

selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}


/>



 </View>
    <View style={[styles.box, styles.box2]}>


   
<TextInput
value={segundo_nombre}
onChangeText={(text) => setSegundo_nombre(text)}
placeholder="Segundo Nombre"
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}
/>
    </View>
   
  </View>




        <View style={styles.row}>

        <View style={[styles.box, styles.two]}>
        
        <TextInput
       value={primer_apellido}
       onChangeText={(text) => setPrimer_apellido(text)}
        placeholder="Primer Apellido"
        placeholderTextColor="gray"
        style={!errorPrimerApellido?[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]:
        [loginStyles.inputField_pagina4_error,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]
         }
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>
            <View style={[styles.box, styles.box2]}>


           
        <TextInput
        value={segundo_apellido}
        onChangeText={(text) => setSegundo_apellido(text)}
        placeholder="Segundo Apellido"
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />
            </View>

</View>


<Text style={loginStyles.label2}>Fecha de Nacimiento</Text>
             

      

        <View style={styles.row}>

        <View style={[styles.box, styles.two]}>

       
        
        
        
    {/* <TextInput
        value={pais}
        onChangeText={(text) => setPais(text)}
        placeholder="Dia"
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        keyboardType='numeric'
        autoCorrect={false}
      /> */}

      <TouchableOpacity activeOpacity={0.8} onPress={() => setOpen(true)
      } value={fechaFormato}
      style={fechaFormato =="Día/Mes/Año"?[loginStyles.inputField_pagina4_error,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]:
        [loginStyles.inputField_pagina4,
          (Platform.OS == 'ios') && loginStyles.inputFieldIOS
          ]
      }
        
      >
     
       {/* <Text style={[loginStyles.inputField_pagina4_d,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}>Fecha</Text> */}
     
        <Text style={[loginStyles.inputField_pagina4_d,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}> {fechaFormato} </Text>


        
      </TouchableOpacity>

      <DatePicker
       maximumDate={new Date('1998-12-31')}
       //date ={1998-12-31}
      locale={'es'}
      title="Seleccionar fecha"
      confirmText="Confirmar"
      cancelText="Cancelar"

      

      
      modal
      open={open}
      mode="date"
      date={date}
      onConfirm={date => {
        setOpen(false);
        formatFecha(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
    
    
        
      
         </View>
          {/*  <View style={[styles.box, styles.box2]}>



           
 <TextInput
        value={departamento}
        onChangeText={(text) => setDepartamento(text)}
        placeholder="Mes"
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
      />
            </View> */}
         {/*   <View style={[styles.box, styles.box3]}>

           

     <TextInput
        value={ciudad}
        onChangeText={(text) => setCiudad(text)}
        placeholder="Año"
        placeholderTextColor="gray"
        style={[loginStyles.inputField_pagina4,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        />
      

      </View> */}


            
            
          </View>








  <View style={styles.row2}>


  <View style={[styles.box, styles.box2]}>


<View style={{ height:45, alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 5, width: '100%', backgroundColor: 'transparent'  }}>



{/* <Select 
            options={[{ value: 'somevalue', label: 'somelabel' }]}
/> */}

{console.log("ok " + placeholder2)}

<RNPickerSelect 
onValueChange={value => {
setOptionsSelected(value);
}}
placeholder={placeholder2}

items={[
{ label: 'Masculino', value: 'Masculino' },
{ label: 'Femenino', value: 'Femenino' },
{ label: 'LGTBIQ+', value: 'LGTBIQ+' }

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

{/* <TextInput
value={departamento}
onChangeText={(text) => setDepartamento(text)}
placeholder="Dpto."
placeholderTextColor="gray"
style={[loginStyles.inputField,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}
/>*/}
</View>


  </View>




  <View style={styles.row2}>

<View style={[styles.box, styles.two]}>


<SelectList 
      onChangeText={() => {(text) => setSelected(text)}}
      setSelected={setSelected} 
      data={data}  
    //  arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
    //  searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={true} 
      searchPlaceholder="Digítalo acá"
      placeholder="Nacionalidad"
      dropdownItemStyles={{borderRadius:0,  borderColor:"black", margin:-4, padding:0}}
      dropdownStyles={{borderRadius:5, borderColor:"black",height:135 }}
      maxHeight={150}
      boxStyles={{borderColor:"black"}} //override default styles
      
      //defaultOption={{ key:'0', value:'Nacionalidad' }}   //default selected option
      
    />



 </View>
   

    
    
  </View>





           
          </View>

          
       {/* <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina6Screen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

*/}

        <View style={loginStyles.buttonContainerco5s}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
         // onPress={() => navigation.replace('Pagina6Screen')}  
         onPress={() => registerUser()}        
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



        <View style={loginStyles.buttonContainer2aco5s2}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina4Screen')}
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
   // width:"90%",
    alignSelf:"center"
  },
  box_1: {
    flex: 2,
   // height: 60,
    right: -2
  }
});
