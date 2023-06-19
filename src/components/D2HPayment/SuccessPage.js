import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import success from '../../assets/success.gif'
import { actuatedNormalize } from '../../common/PixelScaling'

const SuccessPage = (props) => {
    console.log('props',props.route.params)
    const goToDashboardPage = () => {
        props.navigation.push('Home')
    }
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <View style={{alignItems:'center',justifyContent:'center',height:actuatedNormalize(200)}}>
            <Image 
                source={success}
                style={{width: 100, height:100 }} 
            />
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:actuatedNormalize(20),fontWeight:'bold',fontFamily:'monospace',color:'white'}}>Success</Text>
            <Text style={{marginTop:actuatedNormalize(10)}}>Your payment was successfully done.</Text>
        </View>
        <View style={{marginTop:actuatedNormalize(20),alignItems:'center',justifyContent:'center'}}>
            <View>
                <Text style={{color:'lightgray',fontSize:actuatedNormalize(25)}}>{"RS "}{props.route.params.amount}</Text>
            </View>
            <View style={{marginTop:actuatedNormalize(10),alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'lightgray',fontSize:actuatedNormalize(20)}}>{"Customer ID : "}{" "}{props.route.params.customerId}</Text>
                <Text style={{color:'lightgray',fontSize:actuatedNormalize(20),marginTop:actuatedNormalize(10)}}>{"Transaction ID : "}{" "}{props.route.params.transactionId}</Text>
            </View>
            <View>
                <Text>{props.route.params.name}</Text>
            </View>
        </View>
        <View style={{marginTop:actuatedNormalize(30)}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>goToDashboardPage()}>
                <Text style={{color:'white'}}>DONE</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer : {
        marginHorizontal:actuatedNormalize(20),
        height:actuatedNormalize(48),
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginTop : actuatedNormalize(40),
        borderRadius : actuatedNormalize(5)
    }
})

export default SuccessPage