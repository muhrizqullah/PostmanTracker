import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";

// 0105362045532411

export default function ReviewDetails({ route, navigation }) {
  const [response, setResponse] = React.useState({});
  var jenis = navigation.getParam("jenis");
  var noresi = navigation.getParam("noresi");
  const API_KEY =
    "a1b90d4d06ec2bb7345ed2d1de220ff18751b77339f51442c855b4909ddc174b";
  const BASE_URL = "https://api.binderbyte.com/v1/track";

  const getData = async () => {
    try {
      let response = await fetch(
        BASE_URL +
          "?api_key=" +
          API_KEY +
          "&courier=" +
          jenis +
          "&awb=" +
          noresi,
        {
          method: "GET",
        }
      );
      let jsonData = await response.json();
      // console.log(jsonData.data);
      setResponse(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  
  React.useEffect(() => {
    getData();
  });

  const hii = () => {
    return JSON.stringify(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Nomor Resi: {response.data.summary.awb}</Text>
      <Text>Ekspedisi: {response.data.summary.courier}</Text>
      <Text>Status: {response.data.summary.status}</Text>
      <Text>Harga: Rp.{response.data.summary.amount}</Text>
      <Text>Berat: {response.data.summary.weight}</Text>
      <Text>Asal: {response.data.detail.origin}</Text>
      <Text>Tujuan: {response.data.detail.destination}</Text>
      <Text>Pengirim: {response.data.detail.shipper}</Text>
      <Text>Penerima: {response.data.detail.receiver}</Text>
      <FlatList
      style={styles.listStyle}
        keyExtractor={(item) => item.date}
        data={response.data.history}
        renderItem={({ item }) => (
          <View>
            <Text>Tanggal {item.date} Keterangan: {item.desc}</Text>
          </View>
        )}
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
  listStyle: {
    marginTop: 30
}
});
