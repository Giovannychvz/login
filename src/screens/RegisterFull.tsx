import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, Image} from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'



interface Props extends StackScreenProps<any, any>{}

export const RegisterFull = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  const {email, password, password2, name, tipo_usuario,  onChange} = useForm({
    email:'',
    password:'',
    password2:'',
    name:global.nombreComercial,
    tipo_usuario:'empresa'
});

//check

const [isSelectedc, setSelectionc] = useState(false);



const [value, setValue] = useState("");



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
    
  {/*  <Background2 /> */}
    
   
  <WhiteLogo2 />
    
    

    <SafeAreaView  style={loginStyles.button_select_registerwhite_r}>
      
        <ScrollView style={styles.scrollView} >
          

      {/*  <Text style={styles.text}>*/}
         
      
        
        
        

        
        <View style={styles.row}> 
  
   
 </View>



 <View style={[styles.box2, styles.two]}>





<Text>CÓDIGO DE INVITADO(*):  </Text>


<TextInput
value={value}
/*placeholder="Nombre comercial"*/
onChangeText={(text) => setValue(text.toUpperCase())}
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize="characters"
autoCorrect={false}
//editable={false}
selectTextOnFocus={false}
/>

</View>


 <View style={styles.row}>

  

<View style={[styles.box, styles.two]}>





<Text>NOMBRE COMPLETO(*)</Text>
 
 <TextInput
//value={global.nPais}
/*placeholder="Dpto."*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false}
 selectTextOnFocus={false}
/>

</View>





</View>




<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>DOCUMENTO(*)</Text>
 
<TextInput 
//value={global.nDepartamento}
/*placeholder="Ciudad"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false} 
selectTextOnFocus={false}
/>

</View>





</View>








<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>CIUDAD</Text>
 
<TextInput
// value={global.nCiudad}
/*placeholder="Ciudad"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false} 
selectTextOnFocus={false}
/>

</View>





</View>


<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>BARRIO</Text>
 
<TextInput
// value={global.nArchivo}
/*placeholder="Ciudad"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false} 
selectTextOnFocus={false}
/>

</View>





</View>



<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>DIRECCIÓN</Text>
 
<TextInput
//value={global.primerNombre}
/*placeholder="Primer Nombre"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false}
 selectTextOnFocus={false}
/>

</View>





</View>



<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>NÚMERO CELULAR(*)</Text>
 
<TextInput
//value={global.segundoNombre}
/*placeholder="Segundo Nombre"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false}
selectTextOnFocus={false}
/>

</View>





</View>


<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>FECHA DE NACIMIENTO(*)</Text>
 
<TextInput
//value={global.primerApellido}
/*placeholder="P. Apellido"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

editable={false} selectTextOnFocus={false}
/>

</View>





</View>



<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>





<Text>CORREO</Text>
 
<TextInput
//value={global.segundoApellido}
/*placeholder="S. Apellido"*/
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

//editable={false} 
selectTextOnFocus={false}


/>

</View>

</View>



<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>


<Text>CONTRASEÑA(*)</Text>
 
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

</View>

</View>


<View style={styles.row}>

<View style={[styles.box_11, styles.two_11]}>


<Text>REPETIR CONTRASEÑA(*)</Text>
 
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

</View>

</View>




<View style={styles.row}>

<View style={[styles.box_11, styles.two_11, styles.checkboxContainer]}>





<CheckBox
          value={isSelectedc}
          onValueChange={setSelectionc}
         style={styles.checkbox}
        />

<Text style={styles.label}>ACEPTAR TÉRMINOS Y CONDICIONES</Text>


</View>

</View>




<View style={loginStyles.buttonFull_r}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
          //onPress={() => navigation.replace('Pagina9Screen')}       
          >
             
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



        <View style={loginStyles.buttonFull2_r}>
        <TouchableOpacity
          onPress={() => navigation.replace('LoginScreen')}
          activeOpacity={0.8}
         /* style={loginStyles.button_black_3}*/
        >
        {/*  <Text style={loginStyles.buttonText}>X</Text> */}
        <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>



        </ScrollView>


        


        </SafeAreaView >

        
        
       

    </>
  )
}


/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
     // backgroundColor: 'pink',
      marginHorizontal: -20,
    },
    text: {
      fontSize: 15,
    },

    row: {
        //flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
      },
      box: {
        flex: 1,
        height: 60,
        //right: 25
       
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
      ancho:{
        width:100
      }

  }); */


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    row: {
      //flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',

    
     // marginBottom: 10
     //top:"20%",
     alignContent:"center"
    },
    scrollView: {
      // backgroundColor: 'pink',
       marginHorizontal: -20,
     },
     text: {
      fontSize: 15,
    },
    box: {
      flex: 1,
      height:250,
      right: 0
    },
    box_11: {
      right: 0
    },
    box2: {
      left: 0
     
    },
    box3: {
      left: 6
    },
    two: {
      flex: 1,
      //top:140
     
    },
    two_11: {
      flex: 1,
     top:-180
     
    },
    row2: {
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
    },

    label: {
      margin: 8,
    },

    checkbox: {
      alignSelf: 'center',
    },

    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
   
  });