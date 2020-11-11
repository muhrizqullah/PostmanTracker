import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ReviewDetails({ navigation }) {


  return (
    <View style={styles.container}>
      <Text>ReviewDetails Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'pink',
       alignItems: 'center',
       justifyContent: 'center',
     },
});