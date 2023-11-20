import { useAppActive } from "@adembacaj/react-native-hooks";
import LOG from "@adembacajdev/react-native-logger";
import { router } from "expo-router";
import { useEffect } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const isAppActive = useAppActive();
  useEffect(() => {
    LOG.info("App started");
    LOG.debug("App started");
    LOG.warn("App started");
    LOG.error("App started");
  }, []);

  useEffect(() => {
    if (isAppActive) {
      LOG.info("App is active");
    } else {
      LOG.info("App is not active");
    }
  }, [isAppActive]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="About" onPress={() => router.push("/about")} />
      <Button title="Camera" onPress={() => router.push("/camera")} />
      <Button title="Checkbox" onPress={() => router.push("/checkbox")} />
      <Button
        title="Facedetector"
        onPress={() => router.push("/facedetector")}
      />
      <Button title="Haptics" onPress={() => router.push("/haptics")} />
      <Button
        title="Image Manipulator"
        onPress={() => router.push("/image-manipulator")}
      />
      <Button title="Open Intent" onPress={() => router.push("/open-intent")} />
      <Button title="Pedometer" onPress={() => router.push("/pedometer")} />
      <Button title="Print" onPress={() => router.push("/print")} />
      <Button title="Speech" onPress={() => router.push("/speech")} />
      <Button title="Video" onPress={() => router.push("/video")} />
      <Button title="SMS" onPress={() => router.push("/sms")} />
      <Button
        title="Screen Capture"
        onPress={() => router.push("/screen-capture")}
      />
      <Button title="Map" onPress={() => router.push("/map")} />
      <Button
        title="FaceID Authenticator"
        onPress={() => router.push("/faceid")}
      />
      <Button
        title="Image Picker"
        onPress={() => router.push("/image-picker")}
      />
      <Button title="Fast Image" onPress={() => router.push("/fast-image")} />
      <Button title="GLView" onPress={() => router.push("/glview")} />
      <Button title="Calendar" onPress={() => router.push("/calendar")} />
      <Button title="BlurView" onPress={() => router.push("/blurview")} />
      <Button
        title="Background Task"
        onPress={() => router.push("/background-task")}
      />
      <Button title="Apple Login" onPress={() => router.push("/apple-login")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
