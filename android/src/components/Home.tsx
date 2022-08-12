import React from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home: React.FC<{}> = () => {
    const navigation = useNavigation();
  return (
    <View>
          <Text>This is a Home component</Text>
           <Button
        title="Go to Video"
        onPress={() => navigation.navigate('Video' as never)}
      />
    </View>
  );
  };

export default Home;