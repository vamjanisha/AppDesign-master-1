import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
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
  
const GetStart = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        blurRadius={44}
        source={ImagePath.bg_img}
        resizeMode="cover"
        style={{flex:1}}>
        <View style={styles.subContainer}>
          <Image style={styles.tinyLogo} source={ImagePath.app_logo_small} />
          <Text style={styles.logoBottomText}>Nuton</Text>

          <View>
          <Image style={styles.targetLogo} source={ImagePath.target} />
            <Text style={styles.logoBottom}>Account Created!</Text>

            <Text style={styles.subText}>Your account has been created {'\n'} successfully.</Text>

            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subContainer:{
    // justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop:hp(10)
  },
  logoBottomText:{
    fontWeight:'600',
    fontFamily:FONTS.LeagueSpartan_Medium
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
  logoBottom:{
    textAlign:'center',
   marginBottom:hp(3),
   fontSize:20,
   fontWeight:'500',
   fontFamily:FONTS.Lato_Regular
    

  },
  subText:{
 textAlign:'center',
 fontSize:16,
 fontFamily:FONTS.LeagueSpartan_Medium
 
  },
  targetLogo:{
    alignSelf:"center",
    marginTop:hp(5),
    marginBottom:hp(4)

  }
 
});
