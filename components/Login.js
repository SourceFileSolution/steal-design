import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View , StyleSheet,TextInput,Image, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  
  const [error, setErrors] = useState({});
  const  [input, setInput] = useState({
    'userName' :'',
    'password' : '',
  })

  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const newerror = {};

  const retrieveData = async () => {
        try {
          
              const password = await AsyncStorage.getItem('password');
              const username = await AsyncStorage.getItem('name');
              if (username !== null) {
                console.log('Retrieved value:', username);
                console.log('Retrieved value:', password);
              } else {
                console.log('No data found with the specified key.');
              }
              if(input.userName == username && input.password == password){
                alert('login succes');
              }
              else{
                newerror.login = 'invalid Username or Password';
              }
              
              } catch (error) {
                console.error('Error retrieving data:', error);
              }
        };

  const validateForm = ()=>{
       let valid = true;
       if(!input.password){
            newerror.password = 'Password is Required';
            valid = false;
       }
       if(!input.userName){
            newerror.userName = 'Username is Required';
            valid =  false;
       }
       setErrors(newerror);  
  }

  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOp_o0HxgwsnD2iyj3XXC2eFq5Q8KyYD6A&usqp=CAU'};
  return (
      <ScrollView>
              <ImageBackground source={image} resizeMode='cover' >
                    <View style ={styles.container}>
                          <Text style={styles.login}>Login</Text>
                          <Image source={{uri : 'https://static.vecteezy.com/system/resources/thumbnails/009/368/914/small/3d-illustrations-computer-and-account-login-and-password-form-page-on-the-screen-sign-in-to-account-user-authorization-login-page-concept-username-password-fields-data-management-png.png'}} style={{width:200,height: 200,resizeMode:'cover',alignSelf:'center'}}/>
                          {
                              error.login && <Text style={styles.error}>{error.login}</Text>
                          }
                          <Text style={styles.label}>User Name <Text style={styles.required}>*</Text> : </Text>
                          <TextInput style={[ error.userName ? styles.check : styles.input]}
                              placeholder='Enter User Name'
                              onChangeText = {(text)=> handleInput('userName',text)}
                              value ={input.userName}
                          />
                          {
                            error.userName && <Text style={styles.error}>{error.userName}</Text>
                          }
                          <Text style={styles.label}>Password <Text style={styles.required}>*</Text> :</Text>
                          <TextInput
                              style={[ error.password ? styles.check : styles.input]}
                              onChangeText = {(text)=> handleInput('password',text)}
                              placeholder="Enter Your Password"
                              value={input.password} 
                              secureTextEntry  
                          />
                          {
                            error.password&& <Text style={styles.error}>{error.password}</Text>
                          }
                          <View style={styles.forgot}>
                                  <TouchableOpacity>
                                      <Text style={styles.forgot.pass} >forgot password ?</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                      <Text onPress={() => navigation.navigate('SIGNUP')} style = {styles.forgot.sign}>Sign Up ?</Text>
                                  </TouchableOpacity>        
                          </View>
                          <TouchableOpacity style={styles.button}>
                              <Text style={styles.text} onPress={validateForm} onPressIn={ retrieveData}>Log In</Text>
                          </TouchableOpacity>   
                    </View>
            </ImageBackground>
      </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
         display : 'flex',
         backgroundColor : 'white',
         width : '90%',
         borderRadius : 5,
         padding : 20,
         marginTop : 75,
         marginLeft : 18,
         marginBottom : 100,  
         shadowColor: '#000',
         shadowOpacity: 0.8,
         shadowRadius: 2,  
         elevation: 6,
         
    },
    input: {
      height: 40,
      marginBottom : 6,
      borderWidth: 1,
      paddingLeft: 10,
      paddingRight : 10,
      borderRadius : 3,
      width: '100%',
      fontSize:18,
      letterSpacing :0.5,
    },
    check :{
        height: 40,
        marginBottom : 6,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight : 10,
        borderRadius : 3,
        width: '100%',
        fontSize:18,
        borderColor : 'red',
        letterSpacing :0.5,
    },
    button :{
        alignSelf : 'center',
        backgroundColor:'rgb(0, 110, 255)0, 119, 255)',
        padding : 10,
        width : '100%',
        borderRadius : 8,
        marginBottom : 20,
        marginTop : 20,
        letterSpacing :0.5,
    },
    text :{
        textAlign : 'center',
        color : 'white',
        fontSize : 20,
        fontWeight : '600',
        letterSpacing :0.5,
    },
    forgot :{
       display : 'flex',
       flexDirection : 'row',
       justifyContent : 'space-between',
       letterSpacing :0.5,
       pass : {
            
            color : 'red',
            fontSize :18,
           
       },
       sign : {
          
          color : 'green',
          fontSize :18,
          letterSpacing :0.5,
       }
    },
    login :{
        color : 'purple',
        fontSize : 30,
        textTransform :'uppercase',
        fontWeight: '700',
        alignSelf : 'center',
        textDecorationLine : 'underline',
        letterSpacing :0.5,
    },
    label :{
      fontSize :18,
      color : 'rgb(63, 57, 57)',
      letterSpacing :0.5,
    },
    required :{
       color : 'red',
       letterSpacing :0.5,
    },
    error :{
       color : 'red',
       letterSpacing :0.5,
    }
  });