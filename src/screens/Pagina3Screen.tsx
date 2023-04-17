import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo3 } from '../components/WhiteLogo3'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { RadioButton } from 'react-native-paper';

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

interface Props extends StackScreenProps<any, any>{}

export const Pagina3Screen = ({navigation}: Props) => {

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

    
    
  {/*  <Background2 /> */}
    
    <WhiteLogo3 />
         
        <View style={loginStyles.formContainer_3s}>
            
        
   

        <Text style={loginStyles.title3_2}>

        Los Datos Suministrados No Serán Públicos;   Serán Utilizados Únicamente Como Datos Asociados A su Cuenta PLOOY 
        </Text>

       <Text></Text> 


       <Collapse>
    <CollapseHeader>
    <View>
        <Text style={loginStyles.paiss3}>Tipo de empresa</Text>
        <View style={loginStyles.flecha3}>
        
          <Image source={require('../assets/flecha.png')} />

       
        
        </View> 

      </View>
    </CollapseHeader>
    <CollapseBody>

<View style={loginStyles.button_selectwhite_1}>
   

    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Persona Natural" value="first" />
      <RadioButton.Item label="Persona Juridica" value="second"
                  />
           
    </RadioButton.Group>
    </View>

    
    </CollapseBody>
</Collapse>

   
    




        

        </View>


        {value === "first" && (
        <View style={loginStyles.buttonContainerco_1}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}
             
          onPress={() => navigation.replace('Pagina4aScreen')}

             
          >
             <Image source={require('../assets/guardar.png')} />
             {/* <Text style={loginStyles.buttonText}>Guardar</Text>*/}
          </TouchableOpacity>

        </View>

)}


        {value === "second" && (
        <View style={loginStyles.buttonContainerco_1}>
          <TouchableOpacity
             activeOpacity={0.8}
            // style={loginStyles.button_green}           
          onPress={() => navigation.replace('Pagina4ajScreen')}       
          >
              {/*<Text style={loginStyles.buttonText}>Guardar</Text>*/}
              <Image source={require('../assets/guardar.png')} />
          </TouchableOpacity>

        </View>

)}
          
         
        <View style={loginStyles.buttonContainer2aco_1}>
        <TouchableOpacity
          //onPress={() => navigation.replace('Pagina2Screend')}
          onPress={() => navigation.replace('Pagina2Screen')}
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
