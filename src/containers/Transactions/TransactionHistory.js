import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../common/PixelScaling'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const TransactionHistory = (props) => {
    const[boolean, setBoolean] = useState(false)
    const[indicator, setIndicator] = useState(true)
    //const[finalData, setFinalData] = useState({})
    useEffect(()=>{
        console.log("redux",props.state)
        if(props.state.length == 0){
            setBoolean(false)
        }
        else{
            setBoolean(true)
        }
        setTimeout(()=>{
            console.log("set timeout")
            setIndicator(false)
        },100)
    })
    return (
        <View style={{flex:1,backgroundColor:'black'}}>
            {indicator ? 
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator 
                        size={24}
                    />
                </View>
                : boolean ?
                props.state.map((item,index) => {
                    return(
                    <View style={styles.boxContainer} key={index}>
                    <View style={styles.boxContainerTxt}>
                        <Text style={{color:'black',fontSize:actuatedNormalize(18)}}>{item.name}</Text>
                        <View style={styles.successBox}>
                            <Text style={{color:'white',padding:2,fontSize:actuatedNormalize(14)}}>Success</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:actuatedNormalize(10),marginTop:actuatedNormalize(10)}}>
                        <Text style={{color:'black',fontSize:actuatedNormalize(16)}}>{"Customer ID : "}{" "}{item.customerId}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:actuatedNormalize(5)}}>
                        <View style={{marginHorizontal:actuatedNormalize(10)}}>
                            <Text style={{color:'black',fontSize:actuatedNormalize(16)}}>{"Transaction ID : "}{" "}{item.transactionId}</Text>
                        </View>
                        <View style={{alignSelf:'flex-end',marginHorizontal:actuatedNormalize(10)}}>
                            <Text style={{color:'black',fontSize:actuatedNormalize(18)}}>{"RS"}{" "}{item.amount}</Text>
                        </View>
                    </View>
                </View>
                )})
                :
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Text style={{fontSize:actuatedNormalize(16),color:'red',fontWeight:'bold',fontFamily:'monospace'}}>No Transaction History Found</Text>
                </View>
            }
        </View>
  )
}

const mapStateToProps = state => {
    return{
        state:state.transactionHistory.transactionhistory,
    }
}

const styles = StyleSheet.create({
    boxContainer : {
        marginHorizontal:actuatedNormalize(20),
        height : actuatedNormalize(100),
        backgroundColor : 'white',
        marginTop : actuatedNormalize(10),
        borderRadius : actuatedNormalize(5),
        color:'black'
    },
    boxContainerTxt : {
        flexDirection : 'row',
        justifyContent:'space-between',
        marginHorizontal:actuatedNormalize(10),
        alignItems : 'center',
        marginTop : actuatedNormalize(10)
    },
    successBox : {
        backgroundColor:'black',
        alignSelf:'center',
        borderRadius:actuatedNormalize(3)
    }
})

export default connect(mapStateToProps)(TransactionHistory)