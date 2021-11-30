import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./BottomTabs/Settings";
import Profile from "./BottomTabs/Profile";
import Favourite from "./BottomTabs/Favourite";
import File from "./BottomTabs/File";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import Cartegories from "../Cartegories";

const Tab = createBottomTabNavigator();

const BottomNavigate = () => {
  const imageUrl5 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Brendan_Eich.png/220px-Brendan_Eich.png";
  const imageUrl3 ="https://th.bing.com/th/id/OIP.gvaogti0S416s0ZtvmRHmgHaLH?w=131&h=196&c=7&r=0&o=5&pid=1.7";
  const imageUrl2 ="https://th.bing.com/th/id/OIP.DMOUWpymUM_KKCO1jEaaMgHaGK?w=228&h=190&c=7&r=0&o=5&pid=1.7";
  
  const list = [
    {
      color: "pink",
      screenName: "cart",
      title: "Does Dry is January Actually Improve Your Health ?",
      Img: require("../../../assets/1.jpeg"),
      profile: { uri: imageUrl5 },
      name: "Kojo",
      time: "2  min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#F9E0E3",
      title: "How to Seem Like You Always Have Your Shot Together",
      Img: require("../../../assets/2.jpeg"),
      profile: { uri: imageUrl3 },
      name: "Jane Vino",
      time: "3 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#E9ECDA",
      title: "Does Dry is January Actually Improve Your Health ?",
      Img: require("../../../assets/3.jpeg"),
      profile: { uri: imageUrl2 },
      name: "Sam Max",
      time: "3 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
    {
      color: "#EFEAE4",
      title: "You do hire a designer to make something. You hire them",
      Img: require("../../../assets/4.jpeg"),
      profile: require("../../../assets/logo.jpg"),
      name: "Subbash Chandra",
      time: "2 min read",
      text: "sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam doloremque laudantium, totam rem aperiam",
    },
  ];
  
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="carts"
        component={Cartegories}
        options={{
            title: 'Discover' ,
            headerLeft: () => (
               <View style={{marginHorizontal: 20}}><Ionicons name="apps" size={24} color="black" /></View>
            ),
            headerRight: () => (
               <View style={{marginHorizontal: 20}}><Ionicons name="ios-search" size={24} color="black" /></View>
            ),
            tabBarIcon: () => (
              <AntDesign name="contacts" size={30} color="black" />
            ),
            tabBarLabel: 'Discover',
         }}
      />
      <Tab.Screen
        name="file"
        component={File}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="folder-open-o" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{

          tabBarIcon: () => (
            <MaterialIcons name="favorite-border" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigate;
