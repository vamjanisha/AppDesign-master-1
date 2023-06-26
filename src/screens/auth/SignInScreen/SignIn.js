import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  ScrollView,
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
import {BoxShadow} from 'react-native-shadow';
import CheckBox from '@react-native-community/checkbox';
import {COLORS, FONTS} from '../../../constants/Index';
import { useNavigation } from '@react-navigation/native';
const SignIn = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  const btnDemo = () => {
    navigation.navigate('HomePage');

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
          <Text style={styles.welcomText}>Welcome Back!</Text>

          <Text style={styles.signText}>Sign in to continue</Text>

          <View style={styles.inputBox}>
            <TextInput style={styles.textInput} placeholder="Email"></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry></TextInput>

            <View style={styles.checkContainer}>
              <View>
                {/* <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                /> */}
                <Text
                  style={{
                    fontFamily: FONTS.LeagueSpartan_Medium,
                    fontSize: 16,
                  }}>
                  Remember Me
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.LeagueSpartan_Medium,
                    fontSize: 16,
                  }}>
                  Forgot password?
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btnSignIn} onPress={btnDemo}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: hp(4)}}>
              <Text
                style={{
                  fontFamily: FONTS.LeagueSpartan_Medium,
                  // fontSize: 18,
                }}>
                Don't have an account?
              </Text>
              <Text
                style={{
                  fontWeight: '800',
                  paddingStart: 4,
                  fontFamily: FONTS.LeagueSpartan_Medium,
                }}>
                Sign up.
              </Text>
            </View>
          </View>

          <View style={styles.socialBox}>
            {/* <Image style={{}} source={ImagePath.facebook} />
            <Image style={{}} source={ImagePath.google_plus} />
            <Image style={{}} source={ImagePath.twitter} /> */}
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

export default SignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    marginTop: hp('4%'),
  },
  welcomText: {
    color: '#000',
    fontSize: 36,
    // fontWeight: '700',
    fontFamily: FONTS.LeagueSpartan_Regular,
    marginTop: hp('1%'),
  },
  signText: {
    color: COLORS.black,
    fontFamily: FONTS.LeagueSpartan_Medium,
    marginTop: hp('2%'),
    fontSize: 16,
  },
  textInput: {
    // width:'85%',
    // height:hp(7),
    backgroundColor: '#fff',
    fontFamily: FONTS.Lato_Regular,
    // borderWidth: 1,
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
    gap: 20,
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
    marginTop: hp(5),
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
});
