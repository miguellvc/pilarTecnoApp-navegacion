import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs'
import Login from '../screens/Login'
const Stack = createStackNavigator();
export default AppStack = (props) => {
    const isloged = false //variable que controla el login
    return (
        <Stack.Navigator headerMode="none">
            {
                isloged ? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="LogIn" component={Login} />
                )
            }
        </Stack.Navigator>
    )
}
