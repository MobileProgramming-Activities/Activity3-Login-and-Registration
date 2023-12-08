import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function RecoveryForm({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const image = { uri: "https://wallpaperaccess.com/full/7225510.jpg" };
  const logo = require("../../img/logo.png");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logosettings} resizeMode="contain" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.logintitle}>Account Recovery</Text>
      </ImageBackground>
      <Text></Text>
      <TextInput
        mode="contained"
        placeholder="Email for OTP and Recovery Instructions"
        style={styles.emailsettings}
      />
      <TextInput
        mode="contained"
        placeholder="Enter OTP"
        style={styles.otpEnter}
      />

      <Button icon="email" mode="contained" style={styles.RecoveryButton}>
        Send OTP to Email
      </Button>
      <Button
        onPress={() => navigation.navigate("Login")}
        mode="contained"
        style={styles.BackButton}
      >
        Done
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  image: {
    flex: 1,
    width: 380,
    height: 812,
    justifyContent: "center",
    position: "absolute",
    marginLeft: -5,
    bottom: -812,
  },
  logintitle: {
    fontWeight: "bold",
    fontSize: 35,
    color: "black",
    marginTop: -600,
    textAlign: "center",
  },
  logosettings: {
    height: 250,
    width: 370,
    marginTop: 130,
    zIndex: 2,
    marginRight: 49,
  },
  emailsettings: {
    marginTop: 50,
    marginTop: -5,
    width: 320,
    marginLeft: 25,
    bottom: 15,
  },
  otpEnter: {
    marginTop: -50,
    marginBottom: 6,
    top: 100,
    marginLeft: 25,
    width: 320,
  },
  RecoveryButton: {
    margin: 1,
    textAlign: "center",
    marginTop: -15,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 36,
    backgroundColor: "#D5241C",
    borderColor: "black",
    borderWidth: 1,
  },

  BackButton: {
    margin: 1,
    textAlign: "center",
    marginTop: 80,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 36,
    backgroundColor: "#D5241C",
    borderColor: "black",
    borderWidth: 1,
  },
});
