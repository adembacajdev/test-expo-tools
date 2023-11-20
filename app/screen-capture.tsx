import * as ScreenCapture from "expo-screen-capture";
import * as React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import * as SMS from "expo-sms";

export default function ScreenCaptureScreen() {
  React.useEffect(() => {
    ScreenCapture.preventScreenCaptureAsync();
    ScreenCapture.addScreenshotListener(() => {
      console.log("Screenshot taken");
    });
  }, []);

  const sendSms = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        ["0038345465402"],
        "I am sending this message directly from my app"
      );
      console.log("result", result);
    } else {
      Alert.alert("SMS is not available on this device");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Send an sms" onPress={sendSms} />
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
