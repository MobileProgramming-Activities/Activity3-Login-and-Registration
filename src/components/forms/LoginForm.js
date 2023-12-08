import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../fetch/fetchServices";

export default function LoginForm({ navigation }) {
  const image = { uri: "https://wallpaperaccess.com/full/7225510.jpg" };
  const logo = require("../../img/logo.png");
  const [loading, setLoading] = React.useState(false);

  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (values) => {
    try {
      setLoading(true);

      const url = "http://192.168.1.2/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showAlert("Error", result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
      showAlert("Error", e.toString());
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        setTouched,
      }) => (
        <View style={styles.container}>
          <Image
            source={logo}
            style={styles.logosettings}
            resizeMode="contain"
          />
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.logintitle}>Login</Text>
          </ImageBackground>
          <Text></Text>
          <TextInput
            mode="outlined"
            placeholder="Email"
            style={styles.emailsettings}
            value={values.email}
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email && touched.email}
            onFocus={() => setTouched({ email: true }, false)}
          />
          {errors.email && touched.email && (
            <HelperText
              type="error"
              visible={errors.email}
              style={styles.errorText}
            >
              {errors.email}
            </HelperText>
          )}
          <TextInput
            mode="outlined"
            placeholder="Password"
            secureTextEntry={!showPass}
            right={
              <TextInput.Icon
                icon={showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
              />
            }
            style={styles.passwordsettings}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password && touched.password}
            onFocus={() => setTouched({ password: true }, false)}
          />
          {errors.password && touched.password && (
            <HelperText
              type="error"
              visible={errors.password}
              style={styles.errorText}
            >
              {errors.password}
            </HelperText>
          )}
          <Button
            disabled={loading}
            loading={loading}
            icon="account"
            onPress={handleSubmit}
            mode="contained"
            style={styles.LoginButton}
          >
            Login
          </Button>
          <Button
            disabled={loading}
            icon="account-plus"
            onPress={() => navigation.navigate("Register")}
            mode="contained"
            style={styles.RegistrationButton}
          >
            Register
          </Button>
          <Button
            disabled={loading}
            icon="arrow-left"
            onPress={() => navigation.navigate("Landing")}
            mode="contained"
            style={styles.BackButton}
          >
            Go back
          </Button>
          <Button
            disabled={loading}
            icon="account-question"
            onPress={() => navigation.navigate("Recovery")}
            mode="contained"
            style={styles.RecoveryButton}
          >
            Forgot Account?
          </Button>
        </View>
      )}
    </Formik>
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
    marginTop: -650,
    textAlign: "center",
  },
  logosettings: {
    height: 250,
    width: 340,
    marginTop: 40,
    zIndex: 2,
    marginRight: 49,
  },
  LoginButton: {
    margin: 1,
    textAlign: "center",
    marginTop: 90,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    backgroundColor: "#D5241C",
    borderColor: "black",
    borderWidth: 1,
  },
  RecoveryButton: {
    margin: 1,
    textAlign: "center",
    marginTop: 80,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
  },
  RegistrationButton: {
    backgroundColor: "#D5241C",
    borderColor: "black",
    margin: 1,
    textAlign: "center",
    marginTop: 100,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    marginTop: 10,
  },
  BackButton: {
    backgroundColor: "#D5241C",
    borderColor: "black",
    margin: 1,
    textAlign: "center",
    marginTop: 100,
    zIndex: 1,
    width: 300,
    height: 40,
    marginLeft: 19,
    marginTop: 10,
    marginBottom: -17,
  },
  emailsettings: {
    marginTop: -50,
    marginBottom: 6,
  },
  passwordsettings: {
    marginTop: 10,
    marginBottom: 6,
  },
  errorText: {
    marginLeft: -10,
    fontSize: 12,
    color: "#FF0000",
    fontWeight: "900",
  },
});
