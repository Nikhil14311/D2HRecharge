import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { actuatedNormalize } from '../../common/PixelScaling'
import tick from '../../assets/tick.png'
import users from '../../jsondata/users.json'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { userProfile } from '../../Redux/actions/userProfile'

const LoginPage = (props) => {
  const details = {
    name1 : "Transfer the money securely",
    name2 : "Bill payments",
    name3 : "Deposit the money",
    name4 : "Apply for Personal Loans"
  }
  const [value, setValue] = useState('190456001')
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState(false)
  const onChangeText = (text) => {
    setError(false)
    setValue(text)
  }

  useEffect(() => {
    props.userProfile(users)
  },[])
  
  const onSubmit = () => {
    const name={
      label1 : "Nikhil",
      label2 : "Sindhu",
      value : value
    }
    if(value !== ''){
      setError(true)
    }
    if(value == '190456001'){
      props.navigation.navigate('Password',value)
      setError(false)
    }
    else if(value == '190456002'){
      props.navigation.navigate('Password',value)
      setError(false)
    }
    else if(value === '190456003'){
      props.navigation.navigate('Password',value)
      setError(false)
    }
    else{
      setError(true)
    }
  }

  

  return (
    <View style={styles.MainContainer}>
      <View style={styles.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              placeholderTextColor={'grey'}
              value={value}
              onChangeText={(val)=>onChangeText(val)}
            />
          </View>
          {error ? <Text style={{marginHorizontal:actuatedNormalize(15),marginTop:actuatedNormalize(10),color:'red'}}>Please enter valid customer ID</Text> : null}
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:actuatedNormalize(15),marginTop:actuatedNormalize(10)}}>
            <TouchableOpacity>
              <Text>Forgot Customer ID ?</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text>Open New Account ?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onSubmit()}>
              <Text style={{fontFamily:'monospace', fontSize:actuatedNormalize(20),color:'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:actuatedNormalize(25),paddingBottom:actuatedNormalize(30)}}>
            <LabelComponent 
              label = {details.name1}
            />
            <LabelComponent 
              label = {details.name2}
            />
            <LabelComponent 
              label = {details.name3}
            />
            <LabelComponent 
              label = {details.name4}
            />
          </View>
        </View>
        <View style={{paddingVertical :actuatedNormalize(20), flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'black', fontSize:actuatedNormalize(16)}}>{"Drusya Bank Ltd"}</Text>
          <Text style={{color:'black', fontSize:actuatedNormalize(16)}}>{'Copyright Claim 2022'}</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export const LabelComponent = (props) => {
  return(
    <View style={styles.footerContainer}>
      <Image 
        source = {tick}
        style = {{width : actuatedNormalize(30),tintColor:'white'}}
      />
      <Text style={{marginLeft:actuatedNormalize(5)}}>{props.label}</Text>
    </View>
  )
}


const mapStateToProps = state => {
  console.log("redux values",state)
  return{
    userdata : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    userProfile : ((val) => dispatch(userProfile(val)))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)

const styles = StyleSheet.create({
    MainContainer : {
      flex : 1,
      backgroundColor : '#20b2aa',
      paddingHorizontal : actuatedNormalize(12),
      paddingVertical : actuatedNormalize(12)
    },
    subContainer : {
      flex : 1,
      backgroundColor : 'transparent',
      borderRadius : actuatedNormalize(10),
    },
    headerContainer : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      // paddingVertical : actuatedNormalize(20),
      paddingTop : actuatedNormalize(20),
      paddingBottom : actuatedNormalize(20)
    },
    TextInputContainer : {
      borderBottomWidth : 1,
      borderBottomColor : 'grey',
      flexDirection : 'row',
      alignItems : 'center',
      marginHorizontal : actuatedNormalize(15),
      marginTop : actuatedNormalize(10)
    },
    middleContainer : {
      //height : actuatedNormalize(620),
      backgroundColor : 'black',
      borderRadius : actuatedNormalize(10),
      //paddingBottom : actuatedNormalize(180),
      paddingTop : actuatedNormalize(20),
      paddingBottom : actuatedNormalize(20)
    },
    imgContainer : {
      alignItems : 'center',
      marginTop : actuatedNormalize(20),
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
      marginTop : actuatedNormalize(30),
      borderRadius : actuatedNormalize(5)
    },
    footerContainer : {
      //marginTop : actuatedNormalize(15),
      marginHorizontal : actuatedNormalize(15),
      //paddingVertical : actuatedNormalize(20),
      flexDirection : 'row',
      alignItems : 'center',
      alignItems : 'center',
    }
})