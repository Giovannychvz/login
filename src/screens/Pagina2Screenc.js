import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Background2 } from '../components/Background2'
import { WhiteLogo3 } from '../components/WhiteLogo3'
import { WhiteLogoLogin2 } from '../components/WhiteLogoLogin2'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

//import { ListItem } from "@rneui/themed";

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

//interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screenc = ({navigation}) => {

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:''
});

const onRegister = () =>{
    console.log({name, email, password});
    Keyboard.dismiss();
}
const [value, setValue] = React.useState('');
  return (
    <>
    
   {/* <Background2 /> */}
    
    <WhiteLogo3 />
         
        <View style={loginStyles.formContainer3a}>

        <Collapse>
    <CollapseHeader>
    <View style={loginStyles.button_selectwhite2}>
        <Text style={loginStyles.paiss}>Selecciona tu País</Text>
        <View style={loginStyles.flecha}>
        
          <Image source={require('../assets/flecha.png')} />

       
        
        </View> 

      </View>
    </CollapseHeader>
    <CollapseBody>
    <View style={loginStyles.button_selectwhite}>
   

   <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
   <RadioButton.Item label="           Colombia" value="first"   />
    <RadioButton.Item label="           Ecuador" value="second" disabled/>
     <RadioButton.Item label="           Brasil" value="second2" disabled/>
          
   </RadioButton.Group>

 </View>

 <View style={loginStyles.buttonContainerColombia}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/co.png')} />

        </TouchableOpacity>
        
        </View> 


        <View style={loginStyles.buttonContainerEcuador}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/ecuador.jpg')} />

        </TouchableOpacity>
        </View> 


        <View style={loginStyles.buttonContainerBrasil}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/brasil.png')} />

        </TouchableOpacity>
      </View> 
    </CollapseBody>
</Collapse>




       
    
            
        {/*<View style={loginStyles.button_selectwhite}>
   

    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
    <RadioButton.Item label="           Colombia" value="first"   />
     <RadioButton.Item label="           Ecuador" value="second" disabled/>
      <RadioButton.Item label="           Brasil" value="second2" disabled/>
           
    </RadioButton.Group>

   
  </View> 

   <View style={loginStyles.buttonContainerColombia}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/co.png')} />

        </TouchableOpacity>
        
        </View> 


     <View style={loginStyles.buttonContainerEcuador}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/ecuador.jpg')} />

        </TouchableOpacity>
        </View> 

      <View style={loginStyles.buttonContainerBrasil}>
        <TouchableOpacity
         
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/brasil.png')} />

        </TouchableOpacity>
      </View> 
   
   */}

        



        <Text style={loginStyles.title3}> {"\n"}{"\n"}

       </Text>
        


    
      
     

        

        </View>

        {value === "first" && (
        <View style={loginStyles.buttonContainerco_pais}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}
             onPress={() => navigation.replace('Pagina2Screend')}
          >
             <Image source={require('../assets/guardar.png')} />
          {/* <Text style={loginStyles.buttonText}>Siguiente</Text>*/}
          </TouchableOpacity>
        </View>
   )}      


    
        <View style={loginStyles.buttonContainer2aco_pais}>
        <TouchableOpacity
          //onPress={() => navigation.replace('Pagina2Screen')}
          onPress={() => navigation.replace('Pagina2Screen')}
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>


        
      

        
  
       

    </>
  )
}
