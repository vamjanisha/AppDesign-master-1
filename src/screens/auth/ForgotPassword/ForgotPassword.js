import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePath from '../../../constants/ImagePath';
import { FONTS } from '../../../constants/Index';

const ForgotPassword = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.subContainer}>
          <Text style={styles.TopText}>
            Please enter your email address. You will {'\n'}receive a link to
            create a new password via {'\n'}email.
          </Text>
          <TextInput style={styles.textInput} placeholder="Email"></TextInput>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;

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
    textAlign:'justify',
    marginBottom:hp(4),
    fontFamily:FONTS.LeagueSpartan_Medium
  },
  textInput: {
    // width:'85%',
    // height:hp(7),
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    height: hp('8%'),
    paddingStart: 20,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    fontFamily:FONTS.Lato_Regular
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
});
