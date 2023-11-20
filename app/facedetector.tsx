import * as React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { View, StyleSheet } from "react-native";

export default function FaceDetectorScreen() {
  const handleFacesDetected = ({ faces }: any) => {
    console.log({ faces });
  };

  return (
    <View style={styles.container}>
      <Camera
        // other props
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
