import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {
   MaterialIcons,
 } from "@expo/vector-icons";

const Favourite = () => {
   return (
      <View style={styles.container}>
         <MaterialIcons name="favorite-border" size={200} color="red" />
         <Text>No Favorite Blog added</Text>
      </View>
   )
}

export default Favourite

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
   }
})
