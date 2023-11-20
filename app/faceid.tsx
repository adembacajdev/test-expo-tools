import * as React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import * as SMS from "expo-sms";
import * as LocalAuthentication from "expo-local-authentication";

export default function FaceID() {
  const requestFaceId = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    console.log("result", result);
  };

  return (
    <View style={styles.container}>
      <Button title="Requesat Face ID" onPress={requestFaceId} />
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
