/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Modal } from "react-native";

import VideoPlayer from "react-native-video-player";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window")

const App = () => {

  const [start, setStart] = useState(false);

  const onFullScreenPress = () => {
    setStart(true)
  }

  const onClosePress = () => {
    setStart(false)
  }

  const VideoModal = () => {
    return (
      <Modal
        // animationType="slide"
        transparent={false}
        visible={start}
        onRequestClose={onClosePress}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <VideoPlayer
            video={require('./broadchurch.mp4')}
            ref={r => this.player = r}
            videoWidth={width}
            videoHeight={height}
            autoplay={start}
            disableFullscreen={true}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 20, left: 0 }}
            onPress={onClosePress}>
            <Icon
              style={styles.playControl}
              name={"close"}
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>
            Here's some pre-Text
          </Text>
        </View>
      </Modal>
    )
  }

  return (
    <View
      style={styles.container}>
      <TouchableOpacity onPress={onFullScreenPress}>
        <Text style={{ backgroundColor: "blue", color: "white", paddingHorizontal: 15, paddingVertical: 10 }}>
          Full Screen
        </Text>
      </TouchableOpacity>
      {start &&
        <View style={styles.videoView}>
          <VideoPlayer
            video={require('./broadchurch.mp4')}
            ref={r => this.player = r}
            videoWidth={width}
            videoHeight={height}
            autoplay={start}
            disableFullscreen={true}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 20, left: 0 }}
            onPress={onClosePress}>
            <Icon
              style={styles.playControl}
              name={"close"}
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>
            Here's some pre-Text
          </Text>
        </View>
      }
      {/* <VideoModal /> */}
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  videoView: {
    position: "absolute",
    backgroundColor: "black",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textStyle: {
    position: "absolute",
    backgroundColor: "white",
    alignSelf: "center",
    color: "black",
    fontSize: 15,
    bottom: 50,
    padding: 10
  },
  playControl: {
    color: "white",
    padding: 5,
  },
});
