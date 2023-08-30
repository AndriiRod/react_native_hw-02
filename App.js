import { StyleSheet, View } from "react-native";
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

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <PostsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
