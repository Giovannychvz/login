import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import { Alert, Modal, Pressable, Button, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//Agregar menu superior
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';


import { Vehi1 } from '../components/Vehi1'
import { WhiteLogo4 } from '../components/WhiteLogo4'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { ProtectedScreen3 } from './ProtectedScreen3';
import { ProtectedScreen4 } from './ProtectedScreen4';


//menu

function Feed() {
  return (
   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
      <Text>Feed Screen</Text>
    </View>
   
  );
}

function Article() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(logOut) {
  return (
    <>
   
    <Drawer.Navigator
   
   
  // drawerContent={(props) =><MenuItems {...props} />}
    screenOptions={{

     
     // headerTitle:"",
    //  headerShown:true,
/*    drawerContentStyle:{
   backgroundColor:"red",

    },*/

 /*contentOptions: {
      activeTintColor: {color:'white'},
      activeBackgroundColor: '#fff',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#fff',
      
      labelStyle: {
        fontSize: 15,
        marginLeft: 10,
        color:"red"
      },
    },*/

  

   
      headerStyle: {
        backgroundColor: "red",
       // elevation:0
       
        
      },
      headerTintColor: "#fff",
     
      drawerStyle: {
        backgroundColor: 'black',
        inactiveTintColor: 'white',
        width: 240,
            
        
      },
      drawerActiveBackgroundColor:"red",
      drawerInactiveTintColor:"white",
      drawerActiveTintColor:"white"
    }}
    
     >
      <Drawer.Screen name="SOLICITAR CARRERA" component={ProtectedScreen3}  />
      <Drawer.Screen name="VEHÍCULOS" component={ProtectedScreen3} />
      <Drawer.Screen name="CÓDIGO DE REFERIDO" component={ProtectedScreen3}  />
      <Drawer.Screen name="CARRERAS" component={ProtectedScreen3} />
      <Drawer.Screen name="PERFIL" component={ProtectedScreen3} />

     


      

    </Drawer.Navigator>


    
 



</>
   
  );
}


/*const MenuItems = ({logOut}) => {
  return(
    <DrawerContentScrollView>
  
  <Text>Mi menu</Text>
  
      
  <TouchableOpacity
   title="Cerrar sesión"
   color="red"
   
   
   onPress={logOut}
/>


  </DrawerContentScrollView>
  )
}*/


//interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen2 = ({navigation}) => {

  //modal
  const [modalVisible, setModalVisible] = useState(false);

 

  const {user, token, logOut} = useContext(AuthContext);

  //const {tipousuario} = user;

  return (
    <>
<MyDrawer/>


   
  
       

        </>
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
