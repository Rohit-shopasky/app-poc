import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View
} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';



const { width, height } = Dimensions.get("screen");

const VideoScreen: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isMuted, mutedTogle] = useState(true)
  const [isPaused, pausedToggle] = useState(false);
  const [isBuffering, bufferingToggle] = useState(false);
  
  const onBuffering = () => {
    console.log("buffering====================>");
    bufferingToggle(!isBuffering);
  }

  const onError = () => {
    console.log("Something went wrong while playing video!");
  }

  const muteHandler = () => {
    mutedTogle(!isMuted);
  }

  const pauseHandler = () => {
    console.log("pause came")
    pausedToggle(!isPaused);
  }

  
  
  return (<>
    <StatusBar barStyle={"dark-content"} />
    <View style={styles.video}>
      <Video 
        source={{ uri: "https://hls-videos-v1.s3.ap-south-1.amazonaws.com//62595d87a45ff0222cf8da1f/62595d87a45ff0222cf8da1f-v.m3u8" }}
        repeat={true}
        resizeMode={"cover"}
        fullscreen={true}
        style={styles.backgroundVideo}
        onError={onError}
        onBuffer={onBuffering}
        muted={true}
        paused={false}
      />
      <View style={styles.header}>
        
        <View style={styles.row} >
        <Ionicons name="arrow-back" color="#fff" size={24}/>
          <Text style={styles.reel}>Reel</Text>
        </View>

        <View>
          <Ionicons name="camera-outline" color="#fff" size={24} />
        </View>

      </View>
      
      <View style={styles.footer}>

        <View style={styles.row}>
          <Image style={styles.profileIcon} source={{ uri:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}/>
          <Text style={styles.username}>Shan.rohit</Text>
        </View>

        <View style={styles.row}>
            <Ionicons name="musical-notes" color="#fff" size={12}/>
            <Text style={styles.caption}>This is some caption</Text>
          </View>
        
      </View>
      

      <View style={styles.sideBar}>
        <View style={styles.iconInfo}>
          <Ionicons name="heart-outline" color="#fff" size={30} />
          <Text style={styles.countText}>200</Text>
        </View>
        

         <View style={styles.iconInfo}>
          <FontAwesome name="comment-o" color="#fff" size={30} />
          <Text style={styles.countText}>200</Text>
        </View>
        
         <View style={styles.iconInfo}>
          <FontAwesome name="share" color="#fff" size={30} />
        </View>

        <View style={styles.iconInfo}>
          <MaterialCommunityIcons name="dots-vertical" color="#fff" size={30} />
        </View>


      </View>


    </View>

    
  </>)
 
  };

export default VideoScreen;

const styles = StyleSheet.create({
  video: {
    width: width,
    height:height
  },
  
   backgroundVideo: {
    width: width,
    height:height
  },
   
  header: {
    width:width,
    flexDirection: 'row',
    position: 'absolute',
    padding: 15,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems:"center"
  },

  reel: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color:"#fff"
  },

  footer: {
    position: "absolute",
    bottom: 170,
    padding: 15,
    paddingTop: 20,
  },

  profileIcon: {
    width: 50,
    height: 50,
    borderRadius:25
  },

  username: {
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color:"#fff"
  },

  caption: {
    fontSize: 14,
    padding: 5,
    color:"#fff"
  },

  sideBar: {
    position: "absolute",
    right: 10,
    bottom: 180,
    padding: 15,
    paddingBottom:20
  },

  iconInfo: {
    alignItems: "center",
    paddingTop:25
  },

  countText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:14
  }
  
})


// const VideoScreen: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [isMuted, mutedTogle] = useState(true)
//   const [isPaused, pausedToggle] = useState(false);
//   const [isBuffering, bufferingToggle] = useState(false);
  
//   const onBuffering = () => {
//     console.log("buffering====================>");
//     bufferingToggle(!isBuffering);
//   }

//   const onError = () => {
//     console.log("Something went wrong while playing video!");
//   }

//   const muteHandler = () => {
//     mutedTogle(!isMuted);
//   }

//   const pauseHandler = () => {
//     console.log("pause came")
//     pausedToggle(!isPaused);
//   }
  

//   return (
//     <View style={styles.videoContainer}>
//       <View style={{position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,}}>
//       <Video 
//        source={{uri: "https://hls-videos-v1.s3.ap-south-1.amazonaws.com//624ad7f6a45ff0222cf8da18/624ad7f6a45ff0222cf8da18-v.m3u8",type:"m3u8"}}   
//         onBuffer={onBuffering}
//         onError={onError}
//         paused={isPaused}
//         muted={isMuted}
//           style={styles.backgroundVideo} />
//       </View>
      
//       {
//         isBuffering ?(
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         ):(<></>)
//       }

//       <View style={{flex:1,flexDirection:"column",alignSelf:"flex-end",justifyContent:"flex-end"}}>
//         <Text>sdsdsd</Text>
//         <Text>sdsdsd</Text>
        
//         <Text>sdsdsd</Text>
//       </View>
//     </View>
//   );
//   };

// export default VideoScreen;

// const styles = StyleSheet.create({
//   backgroundVideo: {
//    // flex:3,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   videoContainer: {
//     flex: 1,
//    // flexDirection:"column",
//   //  backgroundColor: 'black',
//   },
//   pauseButton: {
//     color:"red"
//   },
//   muteButton: {
//     fontSize: 25, color: "white",
//     position: "absolute",
//     top:240
//   },

//   muteContainer: {
//     flex: 1,
//     flexDirection: "column",
//     padding: 10,
//     justifyContent:"center"
//   },

//   loaderContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems:"center",
//     position: "relative",
//     bottom:160
//   }
// });