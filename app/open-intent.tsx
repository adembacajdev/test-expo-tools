import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";

export default function OpenIntent() {
  return (
    <View style={styles.container}>
      <Button
        title="Open Settings"
        onPress={() =>
          startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS)
        }
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
