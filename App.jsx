import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home Screen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App