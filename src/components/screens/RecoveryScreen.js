import { View } from "react-native";
import React from "react";
import RecoveryForm from "../forms/RecoveryForm";

export default function RecoveryScreen(props) {
  return (
    <View
      styles={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <RecoveryForm {...props} />
    </View>
  );
}