import { ImageBackground } from "react-native";
import { css } from "@emotion/native";

import LoginScreen from "../components/LoginScreen";
import RegistrationScreen from "../components/RegistrationScreen";

const PostsScreen = ({ isKeyboardOpen }) => {
  return (
    <ImageBackground
      source={require("../assets/authBg.jpg")}
      resizeMode="cover"
      style={image}
    >
      {/* <LoginScreen isKeyboard={isKeyboardOpen} /> */}
      <RegistrationScreen isKeyboard={isKeyboardOpen} />
    </ImageBackground>
  );
};

const image = css`
  flex: 1;
  justify-content: flex-end;
`;

export default PostsScreen;
