import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {COLORS, FONTS} from '../../../constants/Index';
  import ImagePath from '../../../constants/ImagePath';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Entypo from 'react-native-vector-icons/Entypo';
  
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Colors from '../../../constants/Colors';
  import {SafeAreaView} from 'react-native-safe-area-context';
  const ForYou = () => {
  

    return (
      <SafeAreaView style={styles.main}>
        <ScrollView>
            <View>

          <View style={styles.header}>
            <TouchableOpacity style={styles.headerNavigation}>
              <AntDesign name="doubleleft" color={COLORS.black} size={30} />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>Profile</Text>
          </View>
         
  
          <View style={styles.profileBox}>
            <View style={styles.imgView}>
              <Image style={styles.tinyLogo} source={ImagePath.post} />
            </View>
            <View style={{justifyContent:'center'}}>
              <View style={{flexDirection: 'row' }}>
                <Text style={styles.userTxt}>Dhruvin Munjapra</Text>
                <Image
                  style={{height: 20, width: 20, alignSelf: 'center'}}
                  source={ImagePath.check}
                />
              </View>
              <Text style={styles.userNameTxt}>@dhruvn_m {`actor`}</Text>
              {/* <Text style={styles.numFollowers}>{'546'}k Crush Followers</Text> */}
            </View>
          </View>
          <View style={styles.bioTxt}>
            <Text style={styles.userBioTxt}>From the flowery and insraonal to...</Text>
            
            <View style={{borderWidth:3,borderRadius:15,borderColor:'grey',marginTop: hp(5)}}>
            <Image
                  style={{height: 300, width:'100%', alignSelf: 'center',borderWidth:2,borderRadius:15}}
                  source={ ImagePath.post}/>
            </View>
            <View style={styles.likeView1}>
            <Image
                  style={{height: 30, width:30, alignSelf: 'center',}}
                  source={ ImagePath.facebook}/>
            <Image
                  style={{height: 30, width:30, alignSelf: 'center',}}
                  source={ ImagePath.facebook}/>
            <Image
                  style={{height: 30, width:30, alignSelf: 'center',}}
                  source={ ImagePath.facebook}/>
            <Image
                  style={{height: 30, width:30, alignSelf: 'center',}}
                  source={ ImagePath.facebook}/>
               <Image
                  style={{height: 30, width:30, alignSelf: 'center',}}
                  source={ ImagePath.google_plus}/>
            </View>

            <View style={styles.likeView}>
              <Text style={{fontFamily: FONTS.Lato_Bold,fontSize:18}}>  
                {'456'}
                {'K'} Likes{' '}
              </Text>
            </View>
              <Text style={{paddingEnd: 20 ,fontFamily:FONTS.LeagueSpartan_Light,textAlign:'right',fontSize:18}}>View 3,044 Comments</Text>
              <Text style={{paddingEnd: 20 ,fontFamily:FONTS.LeagueSpartan_Light,textAlign:'right'}}>jan 2 2023</Text>
                     </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ForYou;
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      height: hp(8),
  
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
    bottomLine: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginTop: hp(2),
      // backgroundColor:'red',
      // justifyContent:'center',
      alignItems:'center'
    },
    borderView: {
      height: hp(0.3),
      backgroundColor: COLORS.gray,
      width: wp('80%'),
    },
    imgBox: {
      borderRadius: wp('50%'),
      alignSelf: 'center',
      borderColor: COLORS.darkpink,
      borderWidth: 2,
  
      // backgroundColor:'red'
    },
    tinyLogo: {
      // padding: wp(1.5)
      height:80,
      width:80,
      borderWidth: 2,
      borderColor: COLORS.darkpink,
      borderRadius: hp('50%'),
    },
    profileBox: {
      flexDirection: 'row',
      marginHorizontal: 20,
      // backgroundColor:'red',
    },
    imgView: {
      width: wp('30%'),
      justifyContent: 'center',
    },
    userTxt: {
      paddingEnd: 10,
      fontFamily: FONTS.Lato_Bold,
      fontSize: 20,
      fontWeight: '800',
      color:'#000'
    },
    numFollowers: {
      color: COLORS.gray,
      fontFamily: FONTS.Lato_Regular,
      fontWeight: '700',
      
    },
    userNameTxt: {
      fontFamily: FONTS.Lato_Regular,
      color:'#000'

    },
    bioTxt: {
    //   marginTop: hp(5),
      marginHorizontal: 10,
    },
    userBioTxt: {
      color: COLORS.black,
      fontFamily: FONTS.Lato_Bold,
      fontSize: 18,
      marginTop:hp(2)
    },
    likeView: {
      flexDirection: 'row',
      marginTop: hp(1),
    //   alignItems:'center',
    //   justifyContent:'center'
    },
    likeView1: {
      flexDirection: 'row',
      marginTop: hp(1),
      alignItems:'center',
      justifyContent:'center'
    },
    massageBox: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: hp(2),
    },
    massageBtn: {
      backgroundColor: COLORS.grayLight,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: COLORS.grayLight,
    },
    msgTxt: {
      paddingVertical: hp(1),
  
      paddingHorizontal: wp(8),
  
      color: COLORS.black,
      fontFamily: FONTS.Lato_Regular,
      fontWeight: '700',
    },
    followBtn: {
      borderWidth: 2,
      borderColor: COLORS.darkpink,
      borderRadius: 10,
    },
    followBtnTxt: {
      paddingHorizontal: wp(8),
      paddingVertical: hp(1),
      color: COLORS.darkpink,
      fontFamily: FONTS.Lato_Regular,
      fontWeight: '700',
    },
    postImg: {
      height: 125,
      width: 125,
      margin:1,
      borderRadius: wp(5),
    },
    postContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: hp(8),
      marginTop: hp(4),
      // marginHorizontal:10,
      // backgroundColor:'red',
      justifyContent:'center'
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      borderColor: COLORS.darkpink,
      borderWidth: 2,
      width: 85,
      height: 85,
      // zIndex:5
    },
    imageContainer: {
      position: 'relative',
      width: '90%',
      height: '90%',
      overflow: 'hidden',
      borderRadius: 100,
      // zIndex:5
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      // zIndex: 5,
    },
    iconContainer: {
      position: 'absolute',
      bottom: -2,
      right: -8,
  
      padding: 5,
      zIndex: 0,
    },
  });
  