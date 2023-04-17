import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { StyleSheet, Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, Image } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'



interface Props extends StackScreenProps<any, any>{}

export const RegisterFullj = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  const {email, password, password2, name, tipo_usuario,  onChange} = useForm({
    email:'',
    password:'',
    password2:'',
    name:global.nombreComercial,
    tipo_usuario:'empresa'
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
    
  {/*  <Background2 /> */}
    
   
  <WhiteLogo2 />
    
    <Text style={loginStyles.title3_n}>Registro: Persona Jurídica</Text>

    <SafeAreaView  style={loginStyles.button_select_registerwhite}>
      
        <ScrollView style={styles.scrollView} >
          

      {/*  <Text style={styles.text}>*/}
         
      
        
        
        

        
        <View style={styles.row}> 
  
   
 </View>



 <View style={[styles.box2, styles.two]}>


<Text>Nombre de Empresa:  </Text>


<TextInput
value={global.nNombreempresa}
/*placeholder="Nombre comercial"*/
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


<View style={[styles.box2, styles.two]}>


<Text>Nombre Comercial:  </Text>


<TextInput
value={global.nNombrecomercial}
/*placeholder="Nombre comercial"*/
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


<View style={[styles.box2, styles.two]}>


<Text>Dirección Postal:  </Text>


<TextInput
value={global.nDirecccionpostal}
/*placeholder="Nombre comercial"*/
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


 <View style={styles.row}>

  

<View style={[styles.box, styles.two]}>





<Text>País:</Text>
 
 <TextInput
value={global.nPais}
/*placeholder="Dpto."*/
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





<Text>Departamento:</Text>
 
<TextInput value={global.nDepartamento}
/*placeholder="Ciudad"*/
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





<Text>Ciudad:</Text>
 
<TextInput value={global.nCiudad}
/*placeholder="Ciudad"*/
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





<Text>NIT:</Text>
 
<TextInput value={global.nTD}
/*placeholder="Ciudad"*/
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





<Text>RUT:</Text>
 
<TextInput value={global.nArchivo}
/*placeholder="Ciudad"*/
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





<Text>Camara de Comercio:</Text>
 
<TextInput value={global.nArchivo2}
/*placeholder="Ciudad"*/
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





<Text>Email:</Text>
 
<TextInput value={global.email_1x}
/*placeholder="Ciudad"*/
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





<Text>Número Celular:</Text>
 
<TextInput value={global.celularx}
/*placeholder="Ciudad"*/
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





<Text>Número Celular Adicional:</Text>
 
<TextInput value={global.celularax}
/*placeholder="Ciudad"*/
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


<Text>Email Asociado:</Text>
 
<TextInput
value={global.email_1}
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


<Text>Celular Asociado:</Text>
 
<TextInput
value={global.celulara}
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


 

        
        
        
{/*
<View style={[styles.ancho,]}>

<Text>Nombre comercial:</Text>

<TextInput
value={global.nombreComercial}
placeholder="Nombre comercial"
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

  <Text>{"\n"}</Text>

  

  <View>


  <Text>Departamento:</Text>
 
  <TextInput
value={global.nDepartamento}
placeholder="Dpto."
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


  
        <View>

            

         

<View>




       </View>
            
            <View>

            <TextInput
value={global.nCiudad}
placeholder="Ciudad"
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



          <View>

        <View >

        <TextInput
value={global.primerNombre}
placeholder="Primer Nombre"
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
            <View >
            <TextInput
value={global.segundoNombre}
placeholder="Segundo Nombre"
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
            <View>

            <TextInput
value={global.primerApellido}
placeholder="P. Apellido"
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
   
       


        
       <View >
      
        <View >

        <TextInput
value={global.segundoApellido}
placeholder="S. Apellido"
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
            <View style={[styles.box, styles.box2]}>

            <TextInput
value={global.nNacionalidad}
placeholder="Nacionalidad"
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
<Text> </Text>
            <View style={[styles.box, styles.box2]}>

            <TextInput
value={global.nTdoc}
placeholder="T. Doc"
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





          {"\n"} 

          <View style={[styles.box, styles.box3]}>

          <TextInput
value={global.nDocumento}
placeholder="Documento"
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
            
            {"\n"}
<TextInput
value={global.nDocumento}
placeholder="Documento"
placeholderTextColor="gray"
style={[loginStyles.inputField_pagina4,
(Platform.OS == 'ios') && loginStyles.inputFieldIOS
]}
selectionColor="orange"
autoCapitalize='none'
autoCorrect={false}

editable={false} selectTextOnFocus={false}


/>
      

          <View style={styles.row}>
      
      <View style={[styles.box, styles.two]}>

      <TextInput
value={global.nDireccion}
placeholder="Dirección - domicilio"
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
      <Text> </Text>

      <View style={[styles.box, styles.box2]}>

      <TextInput
value={global.nPaisDireccion}
placeholder="País D"
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
          <Text> </Text>
          <View style={[styles.box, styles.box2]}>

          <TextInput
value={global.nDepartamentoDireccion}
placeholder="Departamento D"
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

        <View style={[styles.box, styles.box3]}>

        <TextInput
value={global.nCiudadDireccion}
placeholder="Ciudad D"
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

    <Text>   </Text>
      
      <View>

      <TextInput
value={global.nIndicativo}
placeholder="Indicativo"
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
        
          <View >

          <TextInput
value={global.nTelefono}
placeholder="Teléfono"
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


         
 
</Text>*/}
        </ScrollView>


        


        </SafeAreaView >

        <View style={loginStyles.buttonFull}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
          onPress={() => navigation.replace('Pagina8jScreen')}       
          >
             
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>



        <View style={loginStyles.buttonFull2}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina7jScreen')}
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
   
  });