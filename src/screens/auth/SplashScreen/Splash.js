import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import ImagePath from '../../../constants/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Bg_image from '../../../constants/Bg_image';
import { COLORS, FONTS } from '../../../constants/Index';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp')
    }, 3000);
  }, []);

  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex:1}}>
        <View style={styles.subContainer}>
          <Image style={styles.tinyLogo} source={ImagePath.splash_logo} />

          <Text style={styles.appNameText}>Nuton</Text>

          <Text style={styles.bottomText}>Be Smart</Text>
        </View>
      </ImageBackground>
     
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('14%'),

    // backgroundColor:'rgba(0,0,0,.5)',
  },
  tinyLogo: {
    // height: hp(10),
    // width: wp(20),
  },
  appNameText: {
    color: '#000',
    fontSize: 36,
    // fontWeight: '600',
    marginTop: hp('2%'),
    fontFamily:FONTS.Lato_Bold
  },
  bottomText: {
    textAlign: 'center',
    marginTop: hp('2%'),
    fontFamily:FONTS.Lato_Regular,
    color:COLORS.black
    // marginBottom:hp('8%'),
  },
});
