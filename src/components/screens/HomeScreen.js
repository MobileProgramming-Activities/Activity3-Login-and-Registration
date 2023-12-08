import { View } from "react-native";
import React from "react";
import HomeForm from "../forms/HomeForm";

export default function LandingScreen(props) {
  return (
    <View
      styles={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <HomeForm {...props} />
    </View>
  );
}