import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'; 

export default function LoadingScreen() {
  return (
    <View style={styles.containerCentered}>
      <Text style={styles.subtitle}>Loading...</Text>
      <StatusBar style="auto" />
    </View>
  );
}
