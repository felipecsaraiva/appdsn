import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Recovery from '../pages/Recovery';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Recovery" component={Recovery} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;