import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../common/PixelScaling'
import { connect } from 'react-redux'
import { useState } from 'react'
import { confirmPage } from '../../Redux/actions/confirmpage'
import { useEffect } from 'react'
import { mobileRecharge } from '../../Redux/actions/userProfile'
import { userProfile } from '../../Redux/actions/userProfile'

const D2HPayment = (props) => {
    console.log(props.route.params)

    const[customerId, setCustomerID] = useState('')
    const[amount, setAmount] = useState('')
    const[name, setName] = useState('')
    const[transactionId, setTransactionId] = useState('')
    const[value, setValue] = useState('')

    useEffect(()=>{
        {props.paymentdata.map((item) => {
            if(item.id == props.route.params){
                setName(item.name)
                setTransactionId(item.TransactionID)
            }
        })}
    })

    const onChangeText = (val) => {
        setCustomerID(val)
    }

    const AmountChange = (val) => {
        setAmount(val)
    }

    const goToConfirmPage = () => {
        const initialState = {
            customerId : customerId,
            amount : amount,
            name : name,
            transactionId : transactionId,
        }
        props.confirmPage(initialState)
        props.navigation.push('D2HSuccessPage',initialState)
    }

    const addItem = () => {
        props.mobileRecharge(value)
    }

    const addBio = () => {
        const val = {
            id : "190456001",
            value : 180
        }
        props.userProfile(val) 
    }


    return (
        <View style={styles.mainContainer}>
            {props.paymentdata.map((item,index)=>{
                return(
                    (props.route.params == item.id) ? 
                        <View style={styles.headerContainer} key={index}>
                            <Text style={styles.headerTxt}>{item.name}</Text>
                        </View>
                    :null 
                )
            })} 
            {props.route.params == 1 ? 
                <View>
                    <View style={{padding:actuatedNormalize(20),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:actuatedNormalize(20),color:'lightgray'}}>D2H Payment Mode</Text>
                    </View>
                    <View style={{marginTop:actuatedNormalize(10),marginHorizontal:actuatedNormalize(20)}}>
                        <TextInput 
                            placeholder='Customer ID'
                            value={customerId}
                            style={{borderBottomColor:'white',borderBottomWidth:1}}
                            onChangeText={(val) => onChangeText(val)}
                            keyboardType={'numeric'}
                            maxLength={13}
                        />
                        <TextInput 
                            placeholder='Enter Amount'
                            value={amount}
                            style={{borderBottomColor:'white',borderBottomWidth:1,marginTop:actuatedNormalize(20)}}
                            onChangeText={(val) => AmountChange(val)}
                            keyboardType={'numeric'}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.suggestions}>
                        <TouchableOpacity style={styles.suggestionsAmount} onPress={()=>setAmount("350")}>
                            <Text style={{color:'black',fontWeight:'bold'}}>350</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionsAmount} onPress={()=>setAmount("700")}>
                            <Text style={{color:'black',fontWeight:'bold'}}>700</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionsAmount} onPress={()=>setAmount("1200")}>
                            <Text style={{color:'black',fontWeight:'bold'}}>1200</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.suggestionsAmount} onPress={()=>setAmount("1500")}>
                            <Text style={{color:'black',fontWeight:'bold'}}>1500</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={()=>goToConfirmPage()}>
                            <Text style={{color:'white'}}>PAY</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => addBio()}>
                            <Text style={{color:'white'}}>ADD BIO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            :null}

            {props.route.params == 2 ? 
                <View>
                    <TextInput
                        label = 'Nikhil'
                        placeholder='Enter Value'
                        onChangeText={(val) => setValue(val)}
                        value={value}
                    />
                    <TouchableOpacity onPress={()=>addItem()}>
                        <Text>Add Item</Text>
                    </TouchableOpacity>
                </View>
            : null}
        </View>
    )
}

const mapStateToProps = state => {
    console.log("state values",state)
    return{
        paymentdata : state.payments,  
        data : state,   
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch)
  return {
    confirmPage : (value) => {
      dispatch(confirmPage(value))
    },
    mobileRecharge : (value) => {
        dispatch(mobileRecharge(value))
    },
    userProfile : (value) => {
        dispatch(userProfile(value))
    }
  }
}


const styles = StyleSheet.create({
    mainContainer : {
        flex:1,
        backgroundColor : 'black'
    },
    headerContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        height : actuatedNormalize(60),
        borderBottomColor : 'grey',
        borderBottomWidth : 1
    },
    headerTxt : {
        fontSize : actuatedNormalize(18),
        color : 'white',
        fontFamily : 'monospace'
    },
    suggestions : {
        marginTop : actuatedNormalize(20),
        marginHorizontal:actuatedNormalize(20),
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    suggestionsAmount : {
        width:actuatedNormalize(50),
        height:actuatedNormalize(30),
        backgroundColor:'lightgrey',
        alignItems : 'center',
        justifyContent:'center',
        borderRadius:actuatedNormalize(5)
    },
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

export default connect(mapStateToProps,mapDispatchToProps)(D2HPayment)