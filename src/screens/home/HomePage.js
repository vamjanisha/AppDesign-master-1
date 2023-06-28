import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions 
} from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
// import { AntDesign } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Index';
const HomePage = () => {

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

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  // const itemWidth = screenWidth + numColumns;

  const renderItem = ({item}) => (
    <View>
      <View
        style={{
          padding: 4,
          borderWidth: 1,
          borderColor: '#FF55BB',
          borderRadius: 100,
          marginLeft: 10,
        }}>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: 70, height: 70, borderRadius: 100, borderWidth: 1}}
        />
      </View>
      <Text style={{textAlign: 'center'}}>{item.name}</Text>
    </View>
  );
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              padding: 10,
              borderColor: '#FF55BB',
              width: '50%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FF55BB',
                fontSize: 25,
                fontWeight: '500',
              }}>
              abcdf
            </Text>
            <Image style={styles.tinyLogo} source={ImagePath.hart} />
          </View>
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
                <View style={styles.iconContainer}>
                  <AntDesign
                    name="pluscircle"
                    size={22}
                    color="#FF55BB"
                    tintColor={'#FF55BB'}
                  />
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>Your story</Text>
            </View>

            <View style={{marginLeft: 10}}>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={ImagePath.young_man} style={styles.image} />
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>You</Text>
            </View>
            <View
              style={{alignItems: 'center', paddingLeft: 10, marginTop: 15}}>
              <View
                style={{
                  width: 2,
                  height: 50,
                  borderColor: 'grey',
                  borderWidth: 1,
                  alignItems: 'center',
                }}></View>
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
                    width: '90%',
                    height: '90%',
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text style={{textAlign: 'center'}}>albert</Text>
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
        <ScrollView>

        <View style={styles.bottomLine}>
          <View style={styles.borderView}></View>
          <View>
            <AntDesign name="down" color={COLORS.gray} size={25} />
          </View>
        </View>
        <View style={styles.postContainer}>
          {postData.map(item => {
            return (
              <TouchableOpacity style={{}}>
                {/* <Text>{item.id}</Text> */}
                <Image source={item?.img} style={styles.postImg } />
              </TouchableOpacity>
            );
          })}
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    tintColor: '#FF55BB',
    marginLeft: 10,
    marginLeft: 40,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FF55BB',
    width: 75,
    height: 75,
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
  postImg: {
    height: 120,
    width:115,
    margin: 2,
    borderRadius: wp(5),
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp(8),
    marginTop: hp(4),
    // marginHorizontal:10,
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  bottomLine: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: hp(5),
    // backgroundColor:'red',
    // justifyContent:'center',
    alignItems: 'center',
  },
  borderView: {
    height: hp(0.3),
    backgroundColor: COLORS.gray,
    width: wp('80%'),
  },
});
0