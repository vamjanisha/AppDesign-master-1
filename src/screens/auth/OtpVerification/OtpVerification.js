import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ImagePath from '../../../constants/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONTS} from '../../../constants/Index';

const OtpVerification = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [num4, setNum4] = useState();
  const [num5, setNum5] = useState();

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();

  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.subContainer}>
          <Text style={styles.TopText}>Enter Your OTP code here.</Text>

          <View style={styles.otpBox}>
            <TextInput
              ref={et1}
              maxLength={1}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  et2.current.focus();
                }
              }}
              value={num1}
              keyboardType="numeric"
              style={styles.optInput}></TextInput>
            <TextInput
              ref={et2}
              maxLength={1}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
              value={num2}
              keyboardType="numeric"
              style={styles.optInput}></TextInput>
            <TextInput
              ref={et3}
              maxLength={1}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
              value={num3}
              keyboardType="numeric"
              style={styles.optInput}></TextInput>
            <TextInput
              ref={et4}
              maxLength={1}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
              value={num4}
              keyboardType="numeric"
              style={styles.optInput}></TextInput>
            <TextInput
              ref={et5}
              maxLength={1}
              onChangeText={txt => {
                if (txt.length > 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et4.current.focus();
                }
              }}
              value={num5}
              keyboardType="numeric"
              style={styles.optInput}></TextInput>
          </View>

          <View style={{flexDirection: 'row', marginTop: hp(4)}}>
            <Text style={{fontFamily: FONTS.LeagueSpartan_Medium}}>
              Diden't receive the OTP?
            </Text>
            <Text
              style={{
                fontWeight: '800',
                paddingStart: 4,
                fontFamily: FONTS.LeagueSpartan_Medium,
              }}>
              Resend.
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OtpVerification;

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
    fontFamily: FONTS.LeagueSpartan_Medium,
    marginTop: hp(6),

    marginBottom: hp(4),
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
    fontFamily: FONTS.LeagueSpartan_Regular,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  optInput: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderRadius: 10,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    width: wp('14'),
    height: hp('8'),

    // padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    alignSelf: 'center',
  },
});
