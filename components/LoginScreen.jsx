import { useState } from "react";

import { KeyboardAvoidingView, Platform } from "react-native";

import {
  LoginContainer,
  Title,
  Form,
  InputsWrap,
  Input,
  inputPass,
  InputPassWrap,
  BtnShow,
  BtnShowText,
  FormFooterLogin,
  BtnForm,
  BtnFormText,
  BtnReg,
  BtnRegText,
  TextUnderline,
} from "./Form.styled";

const LoginScreen = ({ isKeyboard }) => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  return (
    <Form>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <LoginContainer focus={isKeyboard}>
          <Title>Увійти</Title>
          <InputsWrap>
            <Input
              placeholder="Адреса електронної пошти"
              placeholderTextColor={"#BDBDBD"}
              focus={isEmailFocused}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <InputPassWrap>
              <Input
                style={inputPass}
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={true}
                focus={isPasswordFocused}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <BtnShow activeOpacity={0.7}>
                <BtnShowText>Показати</BtnShowText>
              </BtnShow>
            </InputPassWrap>
          </InputsWrap>
        </LoginContainer>
      </KeyboardAvoidingView>
      <FormFooterLogin>
        <BtnForm activeOpacity={0.8}>
          <BtnFormText>Увійти</BtnFormText>
        </BtnForm>
        <BtnReg activeOpacity={0.7}>
          <BtnRegText>Немає акаунту?</BtnRegText>
          <TextUnderline>Зареєструватися</TextUnderline>
        </BtnReg>
      </FormFooterLogin>
    </Form>
  );
};

export default LoginScreen;
