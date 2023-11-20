import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import {
  Video,
  ResizeMode,
  AVPlaybackStatusSuccess,
  AVPlaybackStatusError,
} from "expo-av";

export default function App() {
  const video = React.useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatusSuccess>({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        onPlaybackStatusUpdate={(
          status: AVPlaybackStatusSuccess | AVPlaybackStatusError
        ) => setStatus(status as AVPlaybackStatusSuccess)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
