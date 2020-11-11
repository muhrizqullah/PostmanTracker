import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

import FlatButton from "../shared/button";
//assets https://coolors.co/fae6db-9d9fab-565459-322f31-feb990-ff9a88-ff8d83-fc8481 //

export default function WelcomeScreen({ navigation }) {

  const [ekpedisi, setEkspedisi] = useState('')
  const [resi, setResi] = useState('')

  const pressHandler = () => {
    navigation.push('Details');
  }
  
  return (
    <SafeAreaView style={styles.container}>
  
        <Text>Pilih Ekspedisi</Text>
        <TextInput style={styles.input}
          placeholder = 'JNE, JNT, TIKI, WAHANA'
          onChangeText={(value) => setEkspedisi(value)}
        />
        <Text>Masukan Resi</Text>
        <TextInput style={styles.input}
          keyboardType = 'numeric'
          placeholder = '123456789'
          onChangeText={(value) => setResi(value)}
        />
        <Text>Ekspedisi: {ekpedisi} Resi: {resi}</Text>
        <FlatButton
        text = 'Cek Resi'
        onPress={pressHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor : '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
