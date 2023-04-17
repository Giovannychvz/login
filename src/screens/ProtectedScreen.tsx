import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { Background2 } from '../components/Background2';

import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen = ({navigation}: Props) => {

  const {user, token, logOut} = useContext(AuthContext);

  //const {tipousuario} = user;

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:'',
  
});

const [value, setValue] = React.useState('');

  return (
    <>
    
    <WhiteLogo2 />

    
         
         <View style={loginStyles.formContainer_3s}>
             
         
    
 
         <Text>
                {JSON.stringify( user, null, 5) }
            </Text>
            <Text>
         {user}
            </Text>

 
        <Text></Text> 
 
 
        <Collapse>
     <CollapseHeader>
     <View>
         <Text style={loginStyles.paiss3}>SELECCIONA CIUDAD</Text>
         <View style={loginStyles.flecha3}>
         
           <Image source={require('../assets/flecha.png')} />

           
        
         
         </View> 
 
       </View>
     </CollapseHeader>
     <CollapseBody>
 
 <View style={loginStyles.button_selectwhite_1}>
    
 
     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
       <RadioButton.Item label="IBAGUÉ" value="first" />

            
     </RadioButton.Group>
     </View>
 
     
     </CollapseBody>
 </Collapse>
 
    
     
 
 
 
 
         
 
         </View>
 
 
         {value === "first" && (
         <View style={loginStyles.formContainer_2}>

       


           <TouchableOpacity
              activeOpacity={0.8}
             // style={loginStyles.button_green}
              
         
           >
              
              <Text>{"\n"}</Text>
        <Button 
           title="GUARDAR"
           color="gray"
           onPress={() => navigation.navigate('ProtectedScreen2')}       
        />
           </TouchableOpacity>
 
         </View>
 
 )}
 
 
         {value === "second" && (
         <View style={loginStyles.buttonContainerco_1}>
          
           <TouchableOpacity
              activeOpacity={0.8}
             // style={loginStyles.button_green}           
           onPress={() => navigation.navigate('ProtectedScreen2')}       
           >
               {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
               <Image source={require('../assets/guardar.png')} />
           </TouchableOpacity>
 
         </View>
 
 )}
           
          
         
    
    
         
        <View style={loginStyles.formContainer}>

      

   

    <Text>{"\n"}</Text>
        <Button 
           title="Cerrar sesión"
           color="red"
           onPress={logOut}
        />
         
        
       
           

     
         
        

        </View>

       

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
  }
})
