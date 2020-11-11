import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

export default function ReviewDetails({ route, navigation }) {
     const jenis = navigation.getParam('jenis');
     const noresi = navigation.getParam('noresi');
  return (
    <View style={styles.container}>
     <Text>Ekspedisi: {jenis}</Text>
     <Text>Nomor Resi: {noresi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6D8AE",
    alignItems: "center",
    justifyContent: "center",
  },
});
