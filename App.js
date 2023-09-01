import { View } from "react-native";
import PostsScreen from "./Screens/PostsScreen";
import { css } from "@emotion/native";

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

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={container}>
      <PostsScreen />
    </View>
  );
}

const container = css`
  flex: 1;
`;
