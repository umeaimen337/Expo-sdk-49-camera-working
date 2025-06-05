// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen';

import DisclaimerScreen from './screens/DisclaimerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Disclaimer">
        <Stack.Screen name="Disclaimer" component={DisclaimerScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen
  name="CameraScreen"
  component={CameraScreen}
  options={{ headerShown: false }}
/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
