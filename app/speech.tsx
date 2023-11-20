import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const speak = () => {
    Speech.speak("My name is Adem, and I am a software developer.");
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
