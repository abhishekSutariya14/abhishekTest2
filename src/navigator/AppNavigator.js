import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {PostDetails} from '../screens/PostDetails';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{title: 'Post Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
