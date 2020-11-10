import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";

import FlatButton from "../shared/button";

//assets https://coolors.co/fae6db-9d9fab-565459-322f31-feb990-ff9a88-ff8d83-fc8481 //
function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagebg}
        source={require("../assets/bg3.png")}
      >
        <View style={styles.button}>
          <FlatButton text="Cek Resi" onPress={() => alert("move to page 2")} />
        </View>
      </ImageBackground>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imagebg: {
    flex: 1,
  },
  button: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
  }
});
export default WelcomeScreen;
