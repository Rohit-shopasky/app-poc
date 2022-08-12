import React from 'react';
import {
    FlatList, View
} from 'react-native';
import VideoScreen from './Video';



const Reels: React.FC<{}> = () => {

    const data = [1];

  return (
    <View>
       <FlatList data={data} renderItem={()=><VideoScreen title='some title'/>}  />
    </View>
  );
  };

export default Reels;