import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#FC8481",
  },
  buttonText: {
    color: "#322F31",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'nunito-regular',
  },
});
