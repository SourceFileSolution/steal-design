import { View, Text ,ImageBackground , Image,StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({navigation}) => {
    const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOp_o0HxgwsnD2iyj3XXC2eFq5Q8KyYD6A&usqp=CAU'};
    return (
        <ScrollView>
                <ImageBackground source={image} resizeMode='cover' >
                        <View style={styles.home}>
                                <Image source={{uri : 'https://png.pngtree.com/png-vector/20220921/ourmid/pngtree-welcome-text-effect-with-colorful-heart-shaped-png-image_6208004.png'}} style={{width:250,height: 200,resizeMode:'cover',alignSelf:'center',marginTop: 250}}/>
                                <View style={{marginBottom: 120}}>
                                        <Text style={styles.heading}>Source File Solution</Text>
                                        <Text style={styles.subhead}>Start Your Dreams with us.....</Text>
                                        <View style ={{flexDirection : 'row',justifyContent :'space-around'}}>
                                                <TouchableOpacity style={styles.button}>
                                                        <Text style={styles.text} onPress={()=>navigation.navigate('LOGIN')}>Log IN</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.button} >
                                                        <Text style={styles.text} onPress={()=>navigation.navigate('SIGNUP')}>Sign Up</Text>
                                                </TouchableOpacity>
                                        </View>  
                                </View>    
                        </View>     
                </ImageBackground> 
        </ScrollView>
        
    )
}

export default Home
const styles = StyleSheet.create({
    home:{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    heading :{
        color : 'green',
        maxWidth : '100%',
        fontSize : 36,
        color : 'rgb(226, 17, 132)',
        fontWeight : '900',
        textTransform : 'uppercase',
        textShadowColor: 'white',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius : 10,
        fontFamily: 'sans-serif-thin',
        letterSpacing :0.5,
        
    },
    button :{
        backgroundColor : 'white',
        padding : 10,
        width : 115,
        display : 'flex',
        margin : 10,
        borderRadius : 3,
        shadowColor: '#000',
         shadowOpacity: 0.8,
         shadowRadius: 2,  
         elevation: 6,
         marginTop: 15
    },
    text :{
        width : '100%',
        fontSize : 20,
        letterSpacing : 0.5,
        color : 'green',
        fontWeight : '800',
        textAlign : 'center',
        
    },
    subhead :{marginTop: 5,
        textAlign: 'center',
        fontSize:23,
        fontWeight:'900',
        fontStyle : 'italic',
        color : 'rgb(11, 107, 145)'
    }
})