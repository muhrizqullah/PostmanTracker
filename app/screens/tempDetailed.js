import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";

// 8825112045710759

export default function ReviewDetails({ route, navigation }) {
  const [response, setResponse] = useState({});
  var jenis = navigation.getParam('jenis');
  var noresi = navigation.getParam('noresi');
  const API_KEY = "9d8b324276e79ffcfefa0d1750e188ef6c6d20d720474c8111395291429f69f4"
  const BASE_URL = "https://api.binderbyte.com/v1/track"

  const getData = async () => {
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
  
    return JSON.stringify(response)
  }

  React.useEffect(() => {
    getData();
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={response}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});