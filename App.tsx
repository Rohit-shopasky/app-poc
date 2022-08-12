import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './android/src/components/Home';
import Reels from './android/src/components/Reels';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import Tabs from './android/src/components/navigation/Tabs';

// export type RootStackParamList = {
//   Video: undefined;
//   Home: undefined;
// };

// const App = () => {
 
// const Stack = createNativeStackNavigator<RootStackParamList>();
//   return (

//       <NavigationContainer>
//       <Stack.Navigator>
//          <Stack.Screen name="Home" component={Home} options={{title:"some title"}} />
//         <Stack.Screen name="Video" component={Reels} />
       
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// };

// export default App;






export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}