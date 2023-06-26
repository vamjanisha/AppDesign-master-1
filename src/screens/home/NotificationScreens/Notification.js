import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../../constants/Index';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../../constants/ImagePath';
const Notification = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerNavigation}>
          <AntDesign name="doubleleft" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Notification</Text>
      </View>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={['#ffb6c1', '#fff', '#ffb6c1']}
          style={styles.linearGradient}>
          <View style={styles.showNotificationBox}>
            <View style={styles.imgBox}>
              <Image style={styles.tinyLogo} source={ImagePath.man} />
            </View>
            <View style={styles.detailText}>
              <Text style={styles.nameText}>Dhruvin Munjapara</Text>
              <Text style={styles.nameText}>Vishal Following</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.nameText}>you</Text>
                <Text
                  style={{
                    fontFamily: FONTS.LeagueSpartan_Medium,
                    alignSelf: 'center',
                    paddingStart: 5,
                  }}>
                  22h
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: hp(7),

    paddingStart: wp(2),
  },
  headerTxt: {
    alignSelf: 'center',
    fontFamily: FONTS.Lato_Bold,
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.black,
    paddingStart: wp(8),
  },
  headerNavigation: {
    alignSelf: 'center',
  },
  linearGradient: {
    // marginTop:hp(4),
    opacity: 0.8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000',
    backgroundColor: 'transparent',
  },
  tinyLogo: {
    // borderRadius:1,
    // borderColor: 'red',
    margin: 3,
  },
  showNotificationBox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: hp(2),
    gap: 1,
  },
  imgBox: {
    borderRadius: wp('50%'),
    alignSelf: 'center',
    borderColor:COLORS.darkpink,
    borderWidth: 2,

    // backgroundColor:'red'
  },
  detailText: {
    // paddingStart: wp(5),
    // backgroundColor:'blue',
    // justifyContent:'center'
  },
  nameText: {
    fontFamily: FONTS.LeagueSpartan_Medium,
    textAlign: 'justify',
    fontSize: 18,
    color: COLORS.black,
  },
  followBtn: {
    // backgroundColor:'red',
  },
  followText: {
  
    borderColor: COLORS.darkpink,
    color: COLORS.darkpink,
    fontFamily: FONTS.Lato_Bold,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 10,
  },
});
