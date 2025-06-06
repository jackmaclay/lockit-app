// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'; 

// Import screens
import MapScreen from './MapScreen';
import SafetyScreen from './tabs/SafetyScreen';
import PlansScreen from './tabs/PlansScreen';
import ProfileScreen from './tabs/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
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
                    iconName = 'account-circle';
                }

                return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'PRI_COL_1', // Your primary color
            tabBarInactiveTintColor: 'SEC_COL_2', // Your secondary color
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