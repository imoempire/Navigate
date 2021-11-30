import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
   AntDesign,
   MaterialIcons,
   Ionicons,
   FontAwesome,
 } from "@expo/vector-icons";
const Settings = () => {
   return (
      <View style={styles.container}>
          <AntDesign name="setting" size={200} color="black" />
      </View>
   )
}

export default Settings

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#E2E2E2',
      justifyContent: 'center',
      alignItems: 'center',
   }
})
