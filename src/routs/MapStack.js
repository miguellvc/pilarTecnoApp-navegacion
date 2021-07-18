import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../screens/Map'

const MapStack = createStackNavigator();

export const MapStackScreen = () =>{
    return(
        <MapStack.Navigator>
            <MapStack.Screen name="Map" component={Map} /> 
        </MapStack.Navigator>
    )
}