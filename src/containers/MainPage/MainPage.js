import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../../common/PixelScaling'
import Payments from '../../jsondata/payments.json'
import { connect } from 'react-redux';
import { PAYMENTS } from "../../Redux/constants";

const MainPage = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Bill Payments</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.paymentsdata.map((item,index) => {
          return(
            <TouchableOpacity style={styles.paymentContainer} key={index} onPress={() => props.navigation.navigate('D2HPayment',item.id)}>
              <Text style={{fontSize:actuatedNormalize(20),color:'white'}}>{item.name}</Text>
              <Image 
                source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/circled-right.png"}}
                style={{ tintColor:'white',width:30,height:30}}
              />
            </TouchableOpacity>
          )
        })}
        <View>
          <TouchableOpacity style={styles.paymentContainer} onPress={() => props.navigation.navigate('TransactionsHistory')}>
                <Text style={{fontSize:actuatedNormalize(20),color:'white'}}>{"Transaction History"}</Text>
                <Image 
                  source={{uri:"https://img.icons8.com/ios-glyphs/30/000000/circled-right.png"}}
                  style={{ tintColor:'white',width:30,height:30}}
                />
              </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export const paymentReducer = (state = Payments,action) => {
  switch (action.type) {
    case PAYMENTS:
      return{
        ...state,
        payments : action.payload
      }
    default:
      return state;
  }
}

const mapStateToProps = state => {
  return{
    paymentsdata : state.payments
  }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
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
  paymentContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : actuatedNormalize(20),
    marginHorizontal : actuatedNormalize(10),
    borderColor : 'grey',
    borderWidth : 1,
    padding : actuatedNormalize(15),
    borderRadius : actuatedNormalize(10),
    marginTop : actuatedNormalize(10),
    alignItems : 'center'
  }
})

export default connect(mapStateToProps,null)(MainPage)