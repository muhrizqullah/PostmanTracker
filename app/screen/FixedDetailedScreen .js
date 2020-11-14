import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function ReviewDetails({ route, navigation }) {
  const [response, setResponse] = useState({});
  var jenis = navigation.getParam('jenis');
  var noresi = navigation.getParam('noresi');
  const API_KEY = "a1b90d4d06ec2bb7345ed2d1de220ff18751b77339f51442c855b4909ddc174b"
  const BASE_URL = "https://api.binderbyte.com/v1/track"

  const getAllNews = async () => {
    try {
      let response = await fetch(
          BASE_URL + "?api_key=" + API_KEY + "&courier=" + jenis + "&awb=" + noresi, {
            method: 'GET'
          });
      let jsonData = await response.json();
      // console.log(jsonData.data);
      setResponse(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  
  const hii = () => {
    // LU OLAH response NYA BENTUK OBJECT
    return JSON.stringify(response)
  }

  React.useEffect(() => {
    getAllNews();
  });

  return (
    <View style={styles.container}>
     <Text>Ekspedisi: {jenis}</Text>
     <Text>Nomor Resi: {noresi}</Text>
     <Text>Nomor Resi: {hii()}</Text>
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
