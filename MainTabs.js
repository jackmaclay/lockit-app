// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens
import MapScreen from './MapScreen';
import SafetyScreen from './tabs/SafetyScreen';
import PlansScreen from './tabs/PlansScreen';
import ProfileScreen from './tabs/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Map') {
                    iconName = 'map';
                } else if (route.name === 'Safety') {
                    iconName = 'security';
                } else if (route.name === 'Plans') {
                    iconName = 'event';
                } else if (route.name === 'Profile') {
                    iconName = 'account_circle';
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FF5E3B', // Your primary color
            tabBarInactiveTintColor: '#3D3D3D', // Your secondary color
            headerShown: false,
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Plans" component={PlansScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
// Note: You can customize the tab bar appearance and behavior by passing additional props to <Tab.Navigator> and <Tab.Screen>. 