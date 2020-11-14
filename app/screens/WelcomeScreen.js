import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

import FlatButton from "../shared/button";

export default function WelcomeScreen({ navigation }) {

  const [ekpedisi, setEkspedisi] = useState('')
  const [resi, setResi] = useState('')
  
  const convertTextToLowerCase = () => {
    let lowerCaseText = ekpedisi.toLowerCase();
    setEkspedisi(lowerCaseText);
  };

  const pressHandler = () => {
    navigation.navigate('Details', {
      jenis : ekpedisi,
      noresi : resi});
  }

  const combined = () => {
    convertTextToLowerCase();
    pressHandler();
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
          autoCapitalize='jjnone'
          onChangeText={(value) => setResi(value)}
        />
        <Text>Ekspedisi: {ekpedisi} Resi: {resi}</Text>
        <FlatButton
        text = 'Cek Resi'
        onPress={() => {combined();}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6D8AE',
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
