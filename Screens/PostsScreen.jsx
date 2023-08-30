import LoginScreen from "../components/LoginScreen";
// import RegistrationScreen from "../components/RegistrationScreen";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const PostsScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/authBg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <LoginScreen />
    </ImageBackground>
  );
};
export default PostsScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
