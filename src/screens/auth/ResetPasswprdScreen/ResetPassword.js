import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ImagePath from '../../../constants/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS } from '../../../constants/Index';
const ResetPassword = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.subContainer}>
          <Text style={styles.TopText}>Enter new password and confirm.</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              placeholder="New Password"
              secureTextEntry></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry></TextInput>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  TopText: {
    fontSize: 18,
    marginTop: hp(6),
    fontFamily:FONTS.LeagueSpartan_Medium
    // marginBottom: hp(4),
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
  btnSignIn: {
    backgroundColor: '#000',
    width: wp('90%'),
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
  inputBox: {
    width: wp('90%'),
    // paddingHorizontal: 15,
    gap: 10,
    marginTop: hp('5%'),
  },
});
