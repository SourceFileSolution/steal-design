import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
const SignUp = ({navigation}) => {
    const [error , setError] = useState({})
    const [input , setInput] = useState({
        'username' : '',
        'password' : '',
        'confirmpassword' : '',
        'email' : '',
        'phone' : '',
    })
     const handleInput = (name , value)=>{
         setInput({
            ...input,
            [name] : value,
         })
    }

        
    const storeData = async () => {
        
        try {
        await AsyncStorage.setItem('name', input.username);
        await AsyncStorage.setItem('password', input.password);
        console.log('Data stored successfully!');
        } catch (error) {
        console.error('Error storing data:', error);
        }
    };



    const validate = ()=>{
         const newError = {}
         if(!input.username){
            newError.username = 'username is Required';
         }
         else if(input.username.length > 15){
            newError.username = 'username should be less than 15 charectors';
         }

         const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         if(!input.password){
            newError.password = 'Password is Required';
         }
         else if(!passwordRegex.test(input.password)){
            newError.password = `           * Password At least one digit 
           * At least one lowercase letter 
           * At least one uppercase letter 
           * Minimum length of 6 characters `
         }
         if(!input.confirmpassword){
                newError.confirmpassword = 'Confirm Password Required';
         }
         else if(input.confirmpassword != input.password){
            newError.confirmpassword = 'Password And Confirm Password should be same'
         }
    
         const emailregix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if(!input.email){
            newError.email = 'E-Mail is Required';
         }
         else if(!emailregix.test(input.email)){
            newError.email = 'Please enter Valid E-Mail adress'
         }

         const phoneregix = /^\d{10}$/
         if(!input.phone){
            newError.phone = 'Phone Number is Required';
         }
         else if(!phoneregix.test(input.phone)){
             newError.phone = 'invalid phone number'
         }
         setError(newError);
    } 
    const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOp_o0HxgwsnD2iyj3XXC2eFq5Q8KyYD6A&usqp=CAU'};
    return (
     <ScrollView>
        <ImageBackground source={image} resizeMode='cover' >
                    <View style ={styles.container}>
                            <Text style={styles.signup}>Sign Up</Text>
                            <Image source={{uri : 'https://static.vecteezy.com/system/resources/thumbnails/021/666/130/small/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-sign-in-to-account-user-authorization-login-authentication-page-concept-png.png'}} style={{width:200,height:160,resizeMode:'cover',alignSelf:'center'}}/>                           
                            <Text style={styles.label}>User Name <Text style={styles.required}>*</Text> :</Text>
                            <TextInput style={[error.username ? styles.check : styles.input]}
                                placeholder='Enter User Name'
                                onChangeText={(text) => handleInput('username',text)}
                                value={input.username}
                            />
                            { error.username && <Text style={styles.error}>{error.username}</Text> }

                            <Text style={styles.label}>Password <Text style={styles.required}>*</Text> :</Text>
                            <TextInput
                                style={[error.password ? styles.check : styles.input]}
                                placeholder="Enter Your Password" 
                                onChangeText={(text)=>handleInput('password',text)}
                                value={input.password}   
                                secureTextEntry 
                            />
                            { error.confirmpassword && <Text style={styles.error}>{error.password}</Text> }

                            <Text style={styles.label}>Confirm Password <Text style={styles.required}>*</Text> :</Text>
                            <TextInput
                                style={[error.password ? styles.check : styles.input]}
                                placeholder="Confirm Your Password" 
                                onChangeText={(text)=>handleInput('confirmpassword',text)}
                                value={input.confirmpassword}   
                                secureTextEntry 
                            />
                            { error.confirmpassword && <Text style={styles.error}>{error.confirmpassword}</Text> }

                            <Text style={styles.label}>E-Mail <Text style={styles.required}>*</Text> :</Text>
                            <TextInput
                                style={[error.email ? styles.check : styles.input]}
                                placeholder="Enter Your Mail ID" 
                                keyboardType="email-address"
                                onChangeText={(text) => handleInput('email',text)}
                                value={input.email}
                            />
                            { error.email && <Text style={styles.error}>{error.email}</Text> }

                            <Text style={styles.label}>Phone <Text style={styles.required}>*</Text> :</Text>
                            <TextInput
                                style={[error.phone ? styles.check : styles.input]}
                                placeholder="Enter Your Phone Number"  
                                keyboardType="numeric"
                                onChangeText={(text)=>handleInput('phone',text)}
                                value={input.phone}  
                                
                            />
                            { error.phone && <Text style={styles.error}>{error.phone}</Text> }

                            <View style={styles.forgot}>
                                <TouchableOpacity>
                                    <Text style = {styles.forgot.signq}>Do You Have a Account ?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style = {styles.forgot.sign} onPress={()=>navigation.navigate('LOGIN')}> Log In</Text>
                                </TouchableOpacity>
                                
                            </View>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.text} onPress={validate} onPressIn={storeData}>Sign Up</Text>
                            </TouchableOpacity>
                            
                    </View>
        </ImageBackground>
     </ScrollView>
  )
}
const styles = StyleSheet.create({
    container : {
         display : 'flex',
         backgroundColor : 'white',
         width : '90%',
         borderRadius : 5,
         padding : 20,
         marginTop : 30,
         marginLeft : 18,
         marginBottom : 20,  
         shadowColor: '#000',
         shadowOpacity: 0.8,
         shadowRadius: 2,  
         elevation: 6
    },
    input: {
      height: 40,
      marginBottom: 6,
      borderWidth: 1,
      paddingLeft: 10,
      paddingRight : 10,
      borderRadius : 3,
      fontSize:18,
      letterSpacing :0.5,
      
    },
    check :{
        height: 40,
        marginBottom: 6,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight : 10,
        borderRadius : 3,
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
        marginBottom : 10,
        marginTop : 10,
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
       marginLeft : 30,
       letterSpacing :0.5,
       sign : {
          fontSize :18,
          marginLeft :6,
          color : 'green',
          textDecorationLine:'underline',
          letterSpacing :0.5,
       },
       signq :{
          fontSize :18,
          
       }
    },
    signup :{
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
export default SignUp