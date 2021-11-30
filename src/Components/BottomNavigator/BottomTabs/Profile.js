import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
   return (
      <View style={styles.container}>
         <View style={styles.Image}>
            <Image style={{width: 100, height: 100, borderRadius: 100 }} source={require('../../../../assets/logo.jpg')}/>
            <Text>John Max</Text>
         </View>
         <View style={styles.info}>
            <Text style={[styles.tab, styles.shadowProp, {borderRadius: 20,}]}>Account</Text>
            <Text style={[styles.tab, styles.shadowProp]}>Saved</Text>
            <Text style={[styles.tab, styles.shadowProp]}>Help</Text>
            <Text style={[styles.tab, styles.shadowProp]}>FQA</Text>
         </View>
      </View>
   )
}

export default Profile

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#E2E2E2"
   },
   Image: {
      flex: .4,
      justifyContent: 'center',
      alignItems: 'center'
   },
   info: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
   tab: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
   },
   shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
})
