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
import {COLORS, FONTS} from '../../constants/Index';
import ImagePath from '../../constants/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = () => {
  const data = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 6,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 7,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 8,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 9,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    {
      id: 11,
      imageUrl:
        'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      name: 'your story',
    },
    // ...
  ];

  const postData = [
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
    {
      img: ImagePath.post,
    },
  ];
  const renderItem = ({item}) => (
    <View>
      <View
        style={{
          padding: wp(1.5),
          borderWidth: 2,
          borderColor: COLORS.darkpink,
          borderRadius: hp('50%'),
          marginHorizontal: wp(1),
          // marginLeft: 10,
        }}>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: 70, height: 70, borderRadius: 100, borderWidth: 1}}
        />
      </View>
      {/* <Text>12121</Text> */}
      <Text style={{textAlign: 'center', alignSelf: 'center'}}>
        {item.name}
      </Text>
    </View>
  );

  const renderItemPost = ({item}) => (
    <View>
      <View
        style={{
          // padding: wp(1.5),
          // borderWidth: 2,
          // borderColor: COLORS.darkpink,
          // borderRadius: hp('50%'),
          marginHorizontal: wp(1),
          // marginLeft: 10,
          flexWrap: 'wrap',
        }}>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: wp('33.33%'), height: hp('33.33%')}}
        />
      </View>
      {/* <Text>12121</Text> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerNavigation}>
            <AntDesign name="doubleleft" color={COLORS.black} size={30} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Profile</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{marginLeft: 10}}>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={ImagePath.user} style={styles.image} />
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>Somimi</Text>
            </View>

            <View style={{marginLeft: 10}}>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={ImagePath.young_man} style={styles.image} />
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>You</Text>
            </View>
           
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  //  borderWidth: 1,
                  //  borderColor: '#FF55BB',
                  tintColor: 'red',
                  width: 75,
                  height: 75,
                }}>
                <Image
                  source={ImagePath.red_heart}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text style={{textAlign: 'center',marginTop:10}}>albert</Text>
            </View>

            <FlatList
              style={
                {
                  // marginTop: 30,
                }
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomLine}>
          <View style={styles.borderView}></View>
          <View>
            <AntDesign name="down" color={COLORS.gray} size={25} />
          </View>
        </View>

        <View style={styles.profileBox}>
          <View style={styles.imgView}>
            <Image style={styles.tinyLogo} source={ImagePath.man} />
          </View>
          <View style={{justifyContent:'center'}}>
            <View style={{flexDirection: 'row' }}>
              <Text style={styles.userTxt}>Dhruvin Munjapra</Text>
              <Image
                style={{height: 20, width: 20, alignSelf: 'center'}}
                source={ImagePath.check}
              />
            </View>
            <Text style={styles.userNameTxt}>dhruvn_m {`actor`}</Text>
            <Text style={styles.numFollowers}>{'546'}k Crush Followers</Text>
          </View>
        </View>
        <View style={styles.bioTxt}>
          <Text style={styles.userBioTxt}>Lorem ipsum dolor sit amet,😀</Text>
          <Text style={styles.userBioTxt}>Lorem ipsum dolor sit amet,😀</Text>
          <Text style={styles.userBioTxt}>Lorem ipsum dolor sit amet,😀</Text>
          <Text style={styles.userBioTxt}>Lorem ipsum dolor sit amet,😀</Text>
          <Text style={styles.userBioTxt}>Lorem ipsum dolor sit amet,😀</Text>

          <View style={styles.likeView}>
            <Text style={{paddingEnd: 20}}>{'34'}Following</Text>
            <Text>
              {'456'}
              {'K'} Likes{' '}
            </Text>
          </View>
          <View style={styles.massageBox}>
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                color={COLORS.gray}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.massageBtn}>
              <Text style={styles.msgTxt}>Massage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followBtnTxt}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={styles.postContainer} 
          numColumns={3}
           >
          {postData.map(item => {
            return (
              <TouchableOpacity style={{}}>
                {/* <Text>{item.id}</Text> */}
                <Image source={item?.img} style={styles.postImg} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

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
  },
  numFollowers: {
    color: COLORS.gray,
    fontFamily: FONTS.Lato_Regular,
    fontWeight: '700',
  },
  userNameTxt: {
    fontFamily: FONTS.Lato_Regular,
  },
  bioTxt: {
    marginTop: hp(5),
    marginHorizontal: 10,
  },
  userBioTxt: {
    color: COLORS.black,
    fontFamily: FONTS.LeagueSpartan_Regular,
    fontSize: 18,
  },
  likeView: {
    flexDirection: 'row',
    marginTop: hp(1),
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
