import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/home/HomePage';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {COLORS} from '../constants/Index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Profile from '../screens/home/Profile';
import Search from '../screens/home/SearchScreen/Search';
import Notification from '../screens/home/NotificationScreens/Notification';
const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown:false,
        headerStyle: {
          backgroundColor: COLORS.white,
          // headerTitleAlign: 'center',
        },
        headerTitleAlign: 'center',
        headerTintColor: COLORS.dark,

        tabBarStyle: {
          height: hp('8%'),
          // borderRadius:10,
          // margin:5,
          // marginHorizontal:10,
          paddingBottom: 10,
          paddingTop: 10,
          // justifyContent:'center',
          // alignSelf:'center',
          // alignItems:'center',
          // paddingHorizontal:30,
          // paddingVertical:40,
          // paddingHorizontal: 5,
          // paddingVertical:20,
          paddingTop: 0,
          // backgroundColor: 'rgba(0,0,0,.5)',

          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-outline' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Notification') {
            iconName = focused
              ? 'ios-notifications-outline'
              : 'notifications-outline';
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
          //  <FontAwesome name={fontawesome} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
     
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false ,tabBarIcon: ({color, size, focused}) => (
          <Ionicons name={'search'} size={size} color={color} />
        ),}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false ,tabBarIcon: ({color, size, focused}) => (
          <FontAwesome name={'user-o'} size={size} color={color} />
        ),}}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
