import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TitleView = ({ name, profilePicture, businessAddress } : { name : string, profilePicture ?: string | null, businessAddress : string } ) => (
  <View style={styles.titleViewStyle}>
    {profilePicture ? <Image source={{ uri: profilePicture }} style={styles.profilePictureStyle} resizeMode='contain' testID='profile-picture'/> : null}
    <Text style={styles.titleText} testID={'business-name-text'}>
      {name}
    </Text>
    <Text style={styles.subtitleText} testID={'business-address-text'}>
      {businessAddress}
    </Text>
  </View>
)

export const styles = StyleSheet.create({
<<<<<<< HEAD
  titleViewStyle: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '8%'
=======
  profilePictureStyle: {
    borderRadius: 10,
    height: 90,
    width: 90,
  },
  subtitleText: {
    color: '#A0A0A0',
    fontSize: 10,
>>>>>>> origin/sprint-2
  },
  titleText: {
    fontSize: 25,
    fontWeight: '500',
  },
<<<<<<< HEAD
  subtitleText: {
    fontSize: 10,
    color: '#A0A0A0',
=======
  titleViewStyle: {
    alignItems: 'center',
    marginBottom: '8%',
    marginTop: '5%',
>>>>>>> origin/sprint-2
  },
})

export default TitleView
