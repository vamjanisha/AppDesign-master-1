import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import ImagePath from '../../../constants/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../../constants/Index';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
  const navigation = useNavigation();
  const btnSign_in = () => {
    navigation.navigate('SignIn')
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.subContainer}>
          <Image style={styles.tinyLogo} source={ImagePath.app_logo_small} />
          <Text style={styles.welcomText}>Sign Up</Text>

          <View style={styles.inputBox}>
            <TextInput style={styles.textInput} placeholder="Name"></TextInput>
            <TextInput style={styles.textInput} placeholder="Email"></TextInput>

            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry></TextInput>
          </View>
          <View>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: hp(4)}}>
              <Text style={styles.btnBottomText}>Already have an account?</Text>
              <Text onPress={btnSign_in}
                style={{
                  fontWeight: '800',
                  paddingStart: 4,
                  fontFamily: FONTS.LeagueSpartan_Medium,
                }}>
                Sign in.
              </Text>
            </View>
          </View>

          <View style={styles.socialBox}>
            <TouchableOpacity style={styles.btnSocial}>
              <Image style={styles.socilLogin} source={ImagePath.facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image style={styles.socilLogin} source={ImagePath.twitter} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image style={styles.socilLogin} source={ImagePath.google_plus} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignSelf:'center',
    alignItems: 'center',
    // backgroundColor:'red'
    // justifyContent:'center'
  },
  tinyLogo: {
    marginTop: hp('4%'),
  },
  welcomText: {
    color: COLORS.black,
    fontSize: 36,
    fontFamily: FONTS.LeagueSpartan_Medium,
    fontWeight: '600',
    marginTop: hp('1%'),
  },
  signText: {
    marginTop: hp('2%'),
  },
  textInput: {
    // width:'85%',
    // height:hp(7),
    backgroundColor: '#fff',
    // borderWidth: 1,
    fontFamily:FONTS.Lato_Regular,
    borderRadius: 10,
    fontSize: 18,
    height: hp('8%'),
    paddingStart: 20,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  inputBox: {
    width: wp('100%'),
    paddingHorizontal: 15,
    gap: 10,
    marginTop: hp('5%'),
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSignIn: {
    backgroundColor: '#000',
    width: wp('85%'),
    borderRadius: 10,
    marginTop: hp(3),
    paddingHorizontal: 15,
  },
  btnText: {
    padding: 15,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: FONTS.LeagueSpartan_Regular,


  },
  socialBox: {
    // marginBottom:hp(8),
    // justifyContent:'space-around',
    marginTop: hp(5),
    flexDirection: 'row',
    columnGap: 12,
    // backgroundColor:'red',
  },
  socilLogin: {
    // padding:20,
    // borderRadius:5,
    // backgroundColor:'#fff',
  },
  btnSocial: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  btnBottomText: {
    fontFamily: FONTS.LeagueSpartan_Medium,
  },
});
