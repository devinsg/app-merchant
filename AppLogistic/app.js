import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import {Home, Restaurant, Order, Delivery} from './screens';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}>
                <Stack.Screen name='Home' component={Tabs}></Stack.Screen>
                <Stack.Screen name='Restaurant' component={Restaurant}></Stack.Screen>
                <Stack.Screen name='Order' component={Order}></Stack.Screen>
                <Stack.Screen name='Delivery' component={Delivery}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;