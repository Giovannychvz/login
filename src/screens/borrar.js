import React,{useState} from 'React';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

const App = () =>{
    const [singleFile, setSingleFile] = useState('');
    const [multipleFile, setMultipleFile] = useState([]);

    const selectOneFile = async () =>{

        try{
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                //DocumentPicker.types.pdf
                //DocumentPicker.types.images

            });
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);

            setSingleFile(res);

        } catch(err){

            if (DocumentPicker.isCancel(err)) {
                alert('Cancelado la selecion del documento');
            } else {
                alert ('error: ' + JSON.stringify(err));
                throw err;
            }

        }
    };


return(
    <SafeAreaView style={{flex: 1}}>
   <Text style={StyleSheet.titleText}>
    Example of file
   </Text>

   <View style={StyleSheet.container}>
     <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={selectOneFile}
        >
          <Text style={{marginRight: 10, fontSize: 19, color:'#000'}}>  
            Click here pick on File
         </Text> 
         <Image  
           source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/54/54719.png'
           }}
           style={styles.imageIconStyle}
         />
     </TouchableOpacity>

     <Text style={styles.textStyle}>
        File name: {singleFile.name ? singleFile.name: ''}
        {'\n'}
        Type:{singleFile.type ? singleFile.type: ''}
        {'\n'}
        File size: { singleFile.size ? singleFile.size : ''}
        {'\n'}
        URI: { singleFile.uri ? singleFile.uri : ''}
        {'\n'}

     </Text>
     <View
       style={{
        backgroundColor: 'grey',
        height: 2,
        margin: 10

       }} />
     

   </View>

    </SafeAreaView>
);


};

export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});