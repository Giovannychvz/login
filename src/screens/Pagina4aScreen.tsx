import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Background2 } from '../components/Background2'
import { WhiteLogo3 } from '../components/WhiteLogo3'
import { WhiteLogoLogin2 } from '../components/WhiteLogoLogin2'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

interface Props extends StackScreenProps<any, any>{}

export const Pagina4aScreen = ({navigation}: Props) => {

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
         
        <View style={loginStyles.formContainer3}>
            
        <Collapse>
    <CollapseHeader>
    <View style={loginStyles.button_selectwhite2}>
        <Text style={loginStyles.paiss2}>Seleccionaste Persona Natural</Text>
      <View style={loginStyles.flecha2_selecion}>

       
        
          <Image source={require('../assets/flechaok.png')} />

       
        
  </View> 

      </View>
    </CollapseHeader>
    <CollapseBody>
    


        
    </CollapseBody>
</Collapse>


   
    

       

        <View style={loginStyles.buttonContainerColombia2}>
        <TouchableOpacity
         
          activeOpacity={0.8}>



        {/*  <Image source={require('../assets/colombia2.png')} /> */}

        </TouchableOpacity>
        </View>



        <Text style={loginStyles.title3}> {"\n"}{"\n"}

       </Text>
        

        <View style={loginStyles.buttonContainerco2_co}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}
             onPress={() => navigation.replace('Pagina4Screen')}
          >
             <Image source={require('../assets/guardar.png')} />
          {/* <Text style={loginStyles.buttonText}>Siguiente</Text>*/}
          </TouchableOpacity>
        </View>
         
        <View style={loginStyles.buttonContainer2aco2_co}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina3Screen')}
          activeOpacity={0.8}
          //style={loginStyles.button_black}
        >
          <Image source={require('../assets/cerrar.png')} />

        </TouchableOpacity>
        </View>

        

        </View>

       

    </>
  )
}
