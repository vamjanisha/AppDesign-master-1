import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './nestedSearch/Screen1';
const Stack = createNativeStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default Search

const styles = StyleSheet.create({})