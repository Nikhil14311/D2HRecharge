import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { actuatedNormalize } from '../../common/PixelScaling'
import tick from '../../assets/tick.png'
import users from '../../jsondata/users.json'


const Password = (props) => {
  console.log('password',props)
  const [username, setUsername] = useState(props.route.params)
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)
  const onChangeText = (text) => {
    setPassword(text)
  }
  
  const onSubmit = () => {
    users.find((item)=>{
      if(item.userid === props.route.params){
          if(item.password === password){
            props.navigation.navigate('Home')
          }
          else{
            Alert.alert('Please check your password')
          }
      }
    })
    // if(isValid){
    //   props.navigation.navigate('Home')
    //   setIsValid(false)
    // }
    // else{
    //   Alert.alert('Please check your customer ID')
    // }

    // props.navigation.navigate('Home')
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.subContainer}>
        <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={{color : 'black', fontSize : actuatedNormalize(16)}}>{"V 1.0"}</Text>
          <Text style={{color : 'black' , fontSize : actuatedNormalize(16)}}>{"Drusya Bank Ltd"}</Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.imgContainer}>
            <Image 
              source={{uri:'https://content3.jdmagicbox.com/comp/kadapa/a1/9999p8562.8562.180316210427.p1a1/catalogue/nikhil-shop-pothapi-kadapa-supermarkets-vna0k311c8-250.jpg'}}
              style={{width:100,height:100,borderRadius:50,borderWidth:1,borderColor:'grey'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput 
              placeholder='Customer ID'
              placeholderTextColor={'white'}
              value={username}
              //onChangeText={(val)=>onChangeText(val)}
              editable={false}
              color={'white'}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput 
              placeholder='Password'
              placeholderTextColor={'grey'}
              value={password}
              onChangeText={(val)=>onChangeText(val)}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onSubmit()}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:actuatedNormalize(22)}}>
          <Text style={{color:'black', fontSize:actuatedNormalize(16)}}>{"Drusya Bank Ltd@Copyright claim"}</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}



export default Password

const styles = StyleSheet.create({
    MainContainer : {
      flex : 1,
      backgroundColor : '#20b2aa'
    },
    subContainer : {
      flex : 1,
      marginHorizontal : actuatedNormalize(12),
      backgroundColor : 'transparent',
      marginVertical : actuatedNormalize(12),
      borderRadius : actuatedNormalize(10)
    },
    headerContainer : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      paddingHorizontal : actuatedNormalize(10),
      marginTop : actuatedNormalize(10),
      paddingBottom : actuatedNormalize(10)
    },
    TextInputContainer : {
      borderBottomWidth : 1,
      borderBottomColor : 'grey',
      flexDirection : 'row',
      alignItems : 'center',
      marginHorizontal : actuatedNormalize(15),
      marginTop : actuatedNormalize(20)
    },
    middleContainer : {
      //height : actuatedNormalize(620),
      backgroundColor : 'black',
      marginTop : actuatedNormalize(20),
      borderRadius : actuatedNormalize(10)
    },
    imgContainer : {
      alignItems : 'center',
      marginTop : actuatedNormalize(40),
    },
    buttonContainer : {
      alignItems : 'center',
      justifyContent : 'center',
      //width : '95%',
      width : actuatedNormalize(330),
      //marginHorizontal : actuatedNormalize(15),
      height : actuatedNormalize(48),
      backgroundColor : 'red',
      alignSelf : 'center',
      marginTop : actuatedNormalize(39),
      borderRadius : actuatedNormalize(5),
      marginBottom : actuatedNormalize(39)
    },
    footerContainer : {
      marginTop : actuatedNormalize(15),
      marginHorizontal : actuatedNormalize(15),
      flexDirection : 'row',
      alignItems : 'center'
    }
})