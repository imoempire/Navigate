import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../Components/Cart";
import Home from "../Components/BottomNavigator/BottomTabs/Home";
import Profile from "../Components/BottomNavigator/BottomTabs/Profile";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
