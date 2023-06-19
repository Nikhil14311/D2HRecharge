import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class MobileRecharge extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>MobileRecharge</Text>
      </View>
    )
  }
}


export default MobileRecharge

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
    }  
})