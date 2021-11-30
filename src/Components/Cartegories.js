import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Cartegories = () => {
 
  const { navigate } = useNavigation();
  const imageUrl5 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Brendan_Eich.png/220px-Brendan_Eich.png";
  const imageUrl3 ="https://th.bing.com/th/id/OIP.gvaogti0S416s0ZtvmRHmgHaLH?w=131&h=196&c=7&r=0&o=5&pid=1.7";
  const imageUrl2 ="https://th.bing.com/th/id/OIP.DMOUWpymUM_KKCO1jEaaMgHaGK?w=228&h=190&c=7&r=0&o=5&pid=1.7";
  
  const list = [
    {
      color: "pink",
      title: "Does Dry is January Actually Improve Your Health ?",
      Img: require("../../assets/1.jpeg"),
      profile: { uri: imageUrl5 },
      name: "Kojo",
      time: "2  min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#F9E0E3",
      title: "How to Seem Like You Always Have Your Shot Together",
      Img: require("../../assets/2.jpeg"),
      profile: { uri: imageUrl3 },
      name: "Jane Vino",
      time: "3 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#E9ECDA",
      title: "Does Dry is January Actually Improve Your Health ?",
      Img: require("../../assets/3.jpeg"),
      profile: { uri: imageUrl2 },
      name: "Sam Max",
      time: "3 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#EFEAE4",
      title: "You do hire a designer to make something. You hire them",
      Img: require("../../assets/4.jpeg"),
      profile: require("../../assets/logo.jpg"),
      name: "Subbash Chandra",
      time: "2 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={list}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate("cart", { item: item })}
            style={{ padding: 16, backgroundColor: "#E2E2E2" }}
          >
            <View style={styles.main}>
              <View style={[styles.box, { backgroundColor: item.color }]}></View>
              <View style={styles.file}>
                <View width="25%">
                  <Image
                    style={{
                      width: 80,
                      height: "100%",
                      borderWidth: 5,
                      borderColor: "white",
                    }}
                    source={item.Img}
                  />
                </View>
                <View style={styles.file_info}>
                  <Text style={{ fontSize: 14, fontWeight: "700", height: 60 }}>
                    {item.title}
                  </Text>
                  <View style={[styles.file_info_name]}>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                      <Image
                        style={{
                          width: 19,
                          height: 19,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        source={item.profile}
                      />
                      <Text style={{marginHorizontal: 10}}>{item.name}</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                      <View style={{top: 7, marginHorizontal: 5}}>
                        <Text style={{fontSize: 5, }}>⚫</Text>
                        </View>
                      <Text>{item.time}</Text>
                      </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Cartegories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E2E2",
  },
  main: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: -1,
  },
  box: {
    width: 70,
    height: 70,
    bottom: 10,
    right: 10,
  },
  file: {
    flex: 1,
    flexDirection: "row",
    marginLeft: -3,
    marginTop: -75,
  },
  file_info: {
    flexDirection: "column",
    width: "70%",
  },
  file_info_name: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
