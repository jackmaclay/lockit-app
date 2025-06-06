import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; 

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.containerPadded}>
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>LockIt</Text>
      <Text style={styles.body}>The key to locking in the best nights of your life.</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.buttonText}>Lock In</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
