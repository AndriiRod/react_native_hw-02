import { ImageBackground, KeyboardAvoidingView } from "react-native";
import { css } from "@emotion/native";

import LoginScreen from "../components/LoginScreen";
import RegistrationScreen from "../components/RegistrationScreen";

const PostsScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/authBg.jpg")}
      resizeMode="cover"
      style={image}
    >
      <KeyboardAvoidingView behavior={"padding"}>
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const image = css`
  flex: 1;
  justify-content: flex-end;
`;

export default PostsScreen;
