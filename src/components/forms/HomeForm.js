import { View, StyleSheet, ImageBackground, Image} from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function HomeForm({ navigation }) {

  const [showPass, setShowPass] = React.useState(false);
  const image = { uri: 'https://wallpaperaccess.com/full/7225510.jpg' };
  const logo = require('../../img/logo.png');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logosettings} resizeMode="contain"/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={styles.landingpagetitle}>Home</Text>
      </ImageBackground>
      <Button onPress={() => navigation.navigate("Login")}mode="contained" style={styles.LoginButton}>Login</Button>
      <Button onPress={() => navigation.navigate("Landing")} mode="contained"style={styles.RegistrationButton}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    width: 380, 
    height: 812,
    justifyContent: "center",
    position:"absolute",
    marginLeft:0
  },
  landingpagetitle:{
    fontWeight:'bold',
    fontSize:35,
    color:'black',
    marginTop:-480,
    textAlign:'center',   
  },
  logosettings:{
    height:250,
    width:370,
    marginTop:130,
    zIndex:2,
    marginRight:49,
  },
  LoginButton:{
    margin:1,
    textAlign:'center',
    marginTop:100,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:38,
    backgroundColor:'#D5241C',
    borderColor:"black",
    borderWidth:1,
  },
  RegistrationButton:{
    backgroundColor:'#D5241C',
    borderColor:"black",
    margin:1,
    textAlign:'center',
    marginTop:100,
    zIndex:1,
    width:300,
    height:40,
    marginLeft:38,
    marginTop:10,

}
});