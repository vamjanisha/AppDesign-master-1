import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignInScreen/SignIn';
import SignUp from '../screens/auth/SignUpScreen/SignUp';
import Splash from '../screens/auth/SplashScreen/Splash';
import ForgotPassword from '../screens/auth/ForgotPassword/ForgotPassword';
import GetStart from '../screens/auth/AccountCreatedScreen/GetStart';
import OtpVerification from '../screens/auth/OtpVerification/OtpVerification';
import ResetPassword from '../screens/auth/ResetPasswprdScreen/ResetPassword';
import HomeNavigator from './HomeNavigator';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStart"
        component={GetStart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
