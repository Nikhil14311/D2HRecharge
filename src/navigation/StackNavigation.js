import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import MainPage from '../containers/MainPage/MainPage';
import LoginPage from '../containers/LoginPage/LoginPage';
import BottomTabNavigation from './BottomTabNavigation';
import Password from '../containers/LoginPage/Password';
import D2HPayment from '../components/D2HPayment/D2HPayment';
import SuccessPage from '../components/D2HPayment/SuccessPage';
import TransactionHistory from '../containers/Transactions/TransactionHistory';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{
                headerShown : false
            }}
        />
        <Stack.Screen 
            name="Password" 
            component={Password} 
            options={{
                headerShown : false
            }}
        />
        <Stack.Screen 
            name="Home" 
            component={BottomTabNavigation} 
            options={{
                headerShown : false
            }}
        />


        <Stack.Screen 
            name="D2HPayment" 
            component={D2HPayment} 
            options={{
                headerShown : false
            }}
        />
         <Stack.Screen 
            name="D2HSuccessPage" 
            component={SuccessPage} 
            options={{
                headerShown : false
            }}
        />
        <Stack.Screen 
            name="TransactionsHistory" 
            component={TransactionHistory} 
            options={{
                headerShown : false
            }}
        />

    </Stack.Navigator>
  )
}

export default StackNavigation