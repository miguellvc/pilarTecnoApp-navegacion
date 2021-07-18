import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'

const HomeStack = createStackNavigator();

export const HomeStackScreen = () =>{

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} /> 
        </HomeStack.Navigator>
    )

}