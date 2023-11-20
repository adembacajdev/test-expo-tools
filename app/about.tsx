import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About() {
  const goBack = () => router.back();
  return (
    <View style={styles.container}>
      <Text>This is About.tsx</Text>
      <Button title="Go back" onPress={goBack} />
      <StatusBar style="auto" />
    </View>
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
