import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


//const baseURL = 'http://192.168.1.6:8080/api';
/*const baseURL = 'https://www.portal.multigobernanza.com/apiMultigobernanza';*/
const baseURL = 'https://portal.tuparcero.com/apiTuparcero';

const cafeApi = axios.create({baseURL});

cafeApi.interceptors.request.use(

   async(config) =>{
     const token = await AsyncStorage.getItem('token');
     if (token){
         config.headers['x-token'] = token;

     }
     return config;
   } 
);

export default cafeApi;