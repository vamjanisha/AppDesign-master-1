import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import HomePage from './src/screens/home/HomePage';
import ForgotPassword from './src/screens/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './src/screens/auth/ResetPasswprdScreen/ResetPassword';
import GetStart from './src/screens/auth/AccountCreatedScreen/GetStart';
import ForYou from './src/screens/home/ForYou/ForYou';
const App = () => {
  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
 <ForYou/>

  );
};

export default App;
