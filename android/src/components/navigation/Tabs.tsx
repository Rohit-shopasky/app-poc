import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from '../Home';
import Reels from '../Reels';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        // tabBarActiveTintColor: 'black',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 5,
          height: 90,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Reels} />
      <Tab.Screen name="test" component={Home} />
      <Tab.Screen name="test2" component={Reels} />
      <Tab.Screen name="test3" component={Reels} />
    </Tab.Navigator>
  );
};

export default Tabs;
