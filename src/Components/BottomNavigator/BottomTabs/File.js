import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
   FontAwesome,
 } from "@expo/vector-icons";

const File = () => {
  return (
    <View style={styles.container}>
      <View style={styles.File}>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>Photo</Text>
      </View>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>Video</Text>
      </View>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>Document</Text>
      </View>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>PDFs</Text>
      </View>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>Audio</Text>
      </View>
      <View style={[styles.file, styles.shadowProp]}>
         <FontAwesome name="folder-open-o" size={30} color="black" />
        <Text>Code</Text>
      </View>
      </View>
    </View>
  );
};

export default File;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E2E2",
  },
  File: {
   alignItems: "center",
   justifyContent: "space-evenly",
  },
  file: {
   flexDirection: "row",
   backgroundColor: 'white',
   borderRadius: 10,
   padding: 20,
   width: 300,
   margin: 10,
  },
  shadowProp: {
   shadowColor: '#171717',
   shadowOffset: {width: -2, height: 4},
   shadowOpacity: 0.2,
   shadowRadius: 3,
 },
});
