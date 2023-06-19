import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../containers/MainPage/MainPage'
import TransactionHistory from '../containers/Transactions/TransactionHistory';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name="MainPage" 
          component={MainPage} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : () => {
              return(
                <Image  
                  source={{uri:'https://img.icons8.com/ios/50/000000/paid-bill.png'}}
                  style={{ width: 25, height: 25, tintColor:'white' }}
                />
              )
            }
          }}
        />
        <Tab.Screen 
          name="Transactions" 
          component={TransactionHistory} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : () => {
              return(
                <Image  
                  source={{uri:'https://img.icons8.com/ios/50/000000/paid-bill.png'}}
                  style={{ width: 25, height: 25, tintColor:'gray' }}
                />
              )
            }
          }}
          
        />
    </Tab.Navigator>
  );
}