import { View } from "react-native";
import React from "react";
import LandingForm from "../forms/LandingForm";

export default function LandingScreen(props) {
  return (
    <View
      styles={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <LandingForm {...props} />
    </View>
  );
}