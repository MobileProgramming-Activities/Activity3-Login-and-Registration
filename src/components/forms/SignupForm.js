import React from "react";
import { View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../fetch/fetchServices";

export default function SignupForm({ navigation }) {
  const image = { uri: "https://wallpaperaccess.com/full/7225510.jpg" };
  const logo = require("../../img/logo.png");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRepassword] = React.useState("");

  const [showPass, setShowPass] = React.useState(true);
  const [showRePass, setShowRePass] = React.useState(true);

  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showAlert = (title = "Error", message = "Something went wrong") => {
    Alert.alert(title, message);
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || rePassword === "") {
        showAlert("Validation Error", "Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== rePassword) {
        showAlert("Validation Error", "Passwords do not match");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.1.2/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: rePassword,
      };

      console.debug(data);

      const result = await fetchServices.postData(url, data);
      console.debug(result);

      if (result.message != null) {
        showAlert("Success", result.message);
        navigation.navigate("Login");
      } else {
        showAlert("Error", "An unexpected error occurred");
      }
    } catch (e) {
      console.debug(e.toString());
      showAlert("Error", e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logosettings} resizeMode="contain" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.logintitle}>Register</Text>
      </ImageBackground>
      <Text></Text>
      <TextInput
        mode="contained"
        placeholder="Name"
        style={styles.namesettings}
        value={name}
        onChangeText={setName}
        error={isError}
      />
      <TextInput
        mode="contained"
        placeholder="Email"
        style={styles.emailsettings}
        value={email}
        onChangeText={setEmail}
        error={isError}
      />
      <TextInput
        mode="contained"
        placeholder="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={styles.passwordsettings}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="contained"
        placeholder="Re-Type Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showRePass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={styles.passwordsettings}
        value={rePassword}
        onChangeText={setRepassword}
        error={isError}
      />

      <Button
        disabled={loading}
        loading={loading}
        icon="account-plus"
        onPress={handleRegistration}
        mode="contained"
        style={styles.createaccButton}
      >
        Create Account
      </Button>
      <Button
        disabled={loading}
        icon="arrow-left"
        onPress={() => navigation.navigate("Landing")}
        mode="contained"
        style={styles.BaccButton}
      >
        Go Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: 380,
    height: 812,
    justifyContent: "center",
    position: "absolute",
    marginLeft: -20,
    bottom: -20,
  },
  logintitle: {
    fontWeight: "bold",
    fontSize: 35,
    color: "black",
    marginTop: -500,
    textAlign: "center",
  },
  logosettings: {
    height: 250,
    width: 340,
    marginTop: 110,
    zIndex: 2,
    marginRight: 49,
  },
  createaccButton: {
    margin: 1,
    textAlign: "center",
    marginTop: 30,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    backgroundColor: "#D5241C",
    borderColor: "black",
    borderWidth: 1,
  },
  BaccButton: {
    margin: 1,
    textAlign: "center",
    marginTop: 9,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    backgroundColor: "#D5241C",
    borderColor: "black",
    borderWidth: 1,
  },
  emailsettings: {
    marginTop: 1,
    marginBottom: 6,
  },
  passwordsettings: {
    marginBottom: 6,
  },
  namesettings: {
    marginTop: -50,
    marginBottom: 6,
  },
});
