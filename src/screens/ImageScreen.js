import React, { useState } from 'react'
import {View, Text, Button, Image} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const ImageScreen = () => {

    const [image, setImage] = useState('https://png.pngtree.com/template/20191014/ourlarge/pngtree-vector-logo-concept-for-accounting-or-real-estate-company-logo-design-image_317795.jpg')
  
    const selectImage = () => {
    
        const options = {
            title : 'Sube el logo o tu foto',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        launchImageLibrary(options, response => {
          
            if(response.errorCode) {
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario cancelo la selección')
            }else{
               const path =  response.assets[0].uri
               setImage(path)
            }

        })

    }

    const takePicture = () => {

        const options = {
            title : 'Tomar una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            includeBase64: true,
        }

        launchCamera(options, response => {
            if(response.errorCode){
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario cancelo la fotografia')
            }else{
                const uri = response.assets[0].uri
                setImage(uri)
            }
        })
    }


  return (
    <View style = {{flex:1, justifyContent: 'center'}}>
        <Button 
            title = "Sube el logo o tu foto"
            onPress={selectImage}
        />

   
        

        <Image
             style= {{
                 alignSelf:'center',
                 height: 100,
                 width: 100,
                 borderRadius: 100
             }}
             source = {{uri: image}}
   
   />

{/*<Button 
            title = "Tomar Fotografia"
            onPress={takePicture}
            /> */ }

        
    </View>
  )
}

export default ImageScreen