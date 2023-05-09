import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import SearchScreen from '../screens/Search';
import TransactionScreen from '../screens/Transaction';

export default class BottomTabNavigator extends Component{

    render(){

        return(
         <NavigationContainer>
         <Tab.Navigator>

         <Tab.Screen name = "Transaction" component = {TransactionScreen}/>
         <Tab.Screen name = "Search" component = {SearchScreen}/>
         
         </Tab.Navigator>
         </NavigationContainer>


        )
    }
}