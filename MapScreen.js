//Imports
import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles'; 


export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  })();
}, []);
  return (
    <View style={styles.containerFull}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        region={location ? {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        } : undefined}
      >
        <Marker
          coordinate={{ latitude: 51.5079, longitude: -0.1280 }}
          title="The Monarch"
          description="Camden’s iconic pub"
        />

        <Marker
          coordinate={{ latitude: 51.5086, longitude: -0.1257 }}
          title="Shooshh"
          description="Student favourite with big nights"
        />
      
    </MapView>
    </View>
  );
}
