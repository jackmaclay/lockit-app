// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import SafetyScreen from './tabs/SafetyScreen';
import PlansScreen from './tabs/PlansScreen';
import SettingsScreen from './tabs/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Heatmap" component={MapScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Plans" component={PlansScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// Note: You can customize the tab bar appearance and behavior by passing additional props to <Tab.Navigator> and <Tab.Screen>. 