import React, { useContext, useState } from 'react'
import { Alert, Modal, Pressable, Button, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//Agregar menu superior
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Vehi1 } from '../components/Vehi1'
import { WhiteLogo4 } from '../components/WhiteLogo4'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
//import { ProtectedScreen3 } from './ProtectedScreen3';
import { ProtectedScreen4 } from './ProtectedScreen4';



export const ProtectedScreen3 = ({navigation}) => {

    //modal
    const [modalVisible, setModalVisible] = useState(false);

    const {user, token, logOut} = useContext(AuthContext);
  
   
  return (
  
             
     <View style={loginStyles.formContainer_tupa}>


<Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
  Alert.alert('Modal has been closed.');
  setModalVisible(!modalVisible);
}}>
<View style={styles.centeredView}>
  <View style={styles.modalView}>
    <Text style={styles.modalText}>GPS DESACTIVADO</Text>
    <Image source={require('../assets/gps_de.png')} style={loginStyles.image3} />  
    <Text></Text> 
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setModalVisible(!modalVisible)}>
      <Text style={styles.textStyle}>CERRAR Y VERIFICAR</Text>
    </Pressable>
  </View>
</View>
</Modal>


   <View style={loginStyles.formContainer_tupa2} >

<Text style={loginStyles.title3_tu}>SOLICITAR UNA CARRERA: RECUERDA PRIMERO HABILITAR EL DISPOSITIVO GPS


</Text>
<Text></Text>

<Image source={require('../assets/gps_google.png')} style={loginStyles.image3} />   


<TouchableOpacity
      activeOpacity={0.8}
     // style={loginStyles.button_green}
     onPress={() => setModalVisible(true)}  
   >
   
      
      <Text></Text>

<Image source={require('../assets/vehi1.jpg')} style={loginStyles.image2} />   
 
   </TouchableOpacity>


   <TouchableOpacity
      activeOpacity={0.8}
     // style={loginStyles.button_green}
     onPress={() => setModalVisible(true)}
   >
      
      <Text></Text>

<Image source={require('../assets/vehi2.jpg')} style={loginStyles.image2} />   
 
   </TouchableOpacity>
   
   
<Text></Text>
<View >
<Button 

   title="Cerrar sesión"
   color="red"
   onPress={logOut}
/>


</View>

</View> 


</View>
  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title:{
    fontSize: 20,
    marginBottom:20
  },

//Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})