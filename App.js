import { View, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { css } from "@emotion/native";

import PostsScreen from "./Screens/PostsScreen";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardOpen(false)
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={container}>
      <PostsScreen isKeyboardOpen={isKeyboardOpen} />
    </View>
  );
}

const container = css`
  flex: 1;
`;
