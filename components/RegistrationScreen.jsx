import { useState } from "react";

import { KeyboardAvoidingView, Platform } from "react-native";

import {
  RegistrationContainer,
  ImageBox,
  Image,
  IconWrap,
  Title,
  Form,
  InputsWrap,
  Input,
  InputPassWrap,
  inputPass,
  BtnShow,
  BtnShowText,
  FormFooterReg,
  BtnForm,
  BtnFormText,
  BtnReg,
  BtnRegText,
  TextUnderline,
} from "./Form.styled";

import IconAdd from "../assets/svg/add-Icon.svg";

const RegistrationScreen = ({ isKeyboard }) => {
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  return (
    <Form>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <RegistrationContainer focus={isKeyboard}>
          <ImageBox>
            <Image></Image>
            <IconWrap>
              <IconAdd width={25} height={25}></IconAdd>
            </IconWrap>
          </ImageBox>
          <Title>Реєстрація</Title>
          <InputsWrap>
            <Input
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
              focus={isLoginFocused}
              onFocus={() => setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
            />
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
        </RegistrationContainer>
      </KeyboardAvoidingView>
      <FormFooterReg>
        <BtnForm activeOpacity={0.8}>
          <BtnFormText>Зареєстуватися</BtnFormText>
        </BtnForm>
        <BtnReg activeOpacity={0.7}>
          <BtnRegText>Вже є акаунт?</BtnRegText>
          <TextUnderline>Увійти</TextUnderline>
        </BtnReg>
      </FormFooterReg>
    </Form>
  );
};

export default RegistrationScreen;
