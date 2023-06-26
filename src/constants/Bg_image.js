import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagePath from './ImagePath'

const Bg_image = () => {
  return (
    <ImageBackground
    blurRadius={44}
    source={ImagePath.bg_img}
    resizeMode="cover"
    style={styles.image}>
  </ImageBackground>
  )
}

export default Bg_image

const styles = StyleSheet.create({
    image: {
        flex: 1,
        // justifyContent: 'center',
      },
})