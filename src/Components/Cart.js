import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const Cart = (props) => {
  const { item } = props.route.params;
  const color = item.color;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View
          style={{ backgroundColor: color, width: 200, height: 250, top: 20 }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: "row",left: 10, }}
          >
            <Ionicons name="chevron-back" size={40} color="black" />
            <Text style={{ top: 10, color: "blue" }}>Beauty</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 30,
            flex: 0.7,
            justifyContent: "space-evenly",
          }}
        >
          <SimpleLineIcons name="earphones" size={24} color="black" />
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </View>

      <View style={styles.Image}>
        <View style={{ marginHorizontal: 20 }}>
          <Image style={styles.main_img} source={item.Img} />
        </View>
      </View>

      <View style={styles.info}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>{item.title}</Text>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
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
          <Text style={{ marginHorizontal: 10 }}>{item.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ top: 7, marginHorizontal: 5 }}>
              <Text style={{ fontSize: 5 }}>⚫</Text>
            </View>
            <Text>{item.time}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{ marginVertical: 10 }}>
            <Text>{item.text}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>{item.text}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>{item.text}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Top: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    right: 10,
  },
  Image: {
    flex: 0.75,
  },
  main_img: {
    width: "100%",
    height: "100%",
    borderWidth: 10,
    borderColor: "white",
  },
  info: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
});
