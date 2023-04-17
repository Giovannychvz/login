import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { RegisterFull } from "../screens/RegisterFull";
import { ProtectedScreen } from "../screens/ProtectedScreen";
import { ProtectedScreen2 } from "../screens/ProtectedScreen2";
import { ProtectedScreen3 } from "../screens/ProtectedScreen3";
import { ProtectedScreen4 } from "../screens/ProtectedScreen4";
import { Pagina2Screen } from "../screens/Pagina2Screen";
import { Pagina2Screenb } from "../screens/Pagina2Screenb";
import { Pagina2Screenc } from "../screens/Pagina2Screenc";
import { Pagina2Screend } from "../screens/Pagina2Screend";
import { Pagina3Screen } from "../screens/Pagina3Screen";
import { AuthContext } from "../context/AuthContext";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Pagina4Screen } from "../screens/Pagina4Screen";
import { Pagina4aScreen } from "../screens/Pagina4aScreen";
import { Pagina5Screen } from "../screens/Pagina5Screen";
import { Pagina6Screen } from "../screens/Pagina6Screen";
import { Pagina7Screen } from "../screens/Pagina7Screen";
import { Pagina8ssScreen } from "../screens/Pagina8ssScreen";
import { Pagina4ajScreen } from "../screens/Pagina4ajScreen";
import { Pagina4jScreen } from "../screens/Pagina4jScreen";
import { Pagina5jScreen } from "../screens/Pagina5jScreen";
import { Pagina6jScreen } from "../screens/Pagina6jScreen";
import { Pagina7jScreen } from "../screens/Pagina7jScreen";
import { Pagina8Screen } from "../screens/Pagina8Screen";
import { Pagina9Screen } from "../screens/Pagina9Screen";
import { Pagina10Screen } from "../screens/Pagina10Screen";
import { LoginScreen0 } from "../screens/LoginScreen0";
import { RegisterFullj } from "../screens/RegisterFullj";
import { Pagina8jScreen } from "../screens/Pagina8jScreen";
import { Pagina9jScreen } from "../screens/Pagina9jScreen";

const Stack = createStackNavigator();

export const Navigator = () => {

  const {status} = useContext(AuthContext);

  if(status === 'checking') return <LoadingScreen/>

  return (
     <Stack.Navigator
     screenOptions={{
     headerShown:false,
     cardStyle:{
       backgroundColor: 'white'
     }
     }}>

{
  (status !== 'authenticated')
  ?(
    <>
      <Stack.Screen name="LoginScreen0" component={LoginScreen0} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
       <Stack.Screen name="Pagina2Screenb" component={Pagina2Screenb} />
       <Stack.Screen name="Pagina2Screenc" component={Pagina2Screenc} />
       <Stack.Screen name="Pagina2Screend" component={Pagina2Screend} />
       <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
       <Stack.Screen name="Pagina4Screen" component={Pagina4Screen} />
       <Stack.Screen name="Pagina4aScreen" component={Pagina4aScreen} />
       <Stack.Screen name="Pagina5Screen" component={Pagina5Screen} />
       <Stack.Screen name="Pagina6Screen" component={Pagina6Screen} />
       <Stack.Screen name="Pagina7Screen" component={Pagina7Screen} />
       <Stack.Screen name="Pagina8Screen" component={Pagina8Screen} />
       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
       <Stack.Screen name="RegisterFull" component={RegisterFull} />
       <Stack.Screen name="Pagina8ssScreen" component={Pagina8ssScreen} />
       <Stack.Screen name="Pagina9Screen" component={Pagina9Screen} />
       <Stack.Screen name="Pagina10Screen" component={Pagina10Screen} />

       <Stack.Screen name="Pagina4ajScreen" component={Pagina4ajScreen} />

       <Stack.Screen name="Pagina4jScreen" component={Pagina4jScreen} />
       <Stack.Screen name="Pagina5jScreen" component={Pagina5jScreen} />
       <Stack.Screen name="Pagina6jScreen" component={Pagina6jScreen} />
       <Stack.Screen name="Pagina7jScreen" component={Pagina7jScreen} />

       <Stack.Screen name="RegisterFullj" component={RegisterFullj} />
       <Stack.Screen name="Pagina8jScreen" component={Pagina8jScreen} />
       <Stack.Screen name="Pagina9jScreen" component={Pagina9jScreen} />
       
    </>

  ):
  (
    <>
    <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    <Stack.Screen name="ProtectedScreen2" component={ProtectedScreen2} />
    <Stack.Screen name="ProtectedScreen3" component={ProtectedScreen3} />
    <Stack.Screen name="ProtectedScreen4" component={ProtectedScreen4} />
    </>
  )
}

       
        
      </Stack.Navigator>
  );
}
