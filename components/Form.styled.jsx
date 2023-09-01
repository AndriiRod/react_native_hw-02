import styled, { css } from "@emotion/native";

const text = css`
  font-family: Roboto_400Regular;
  font-size: 16px;
`;

export const LoginContainer = styled.View`
  padding: 32px 16px 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  background-color: #ffffff;
  padding-bottom: ${({ focus }) => (focus ? "32px" : "111px")};
`;
// padding-bottom: ${({ focus }) =>
//     focus.some((item) => item === true) ? "32px" : "111px"};

export const Title = styled.Text`
  margin-bottom: 33px;

  font-family: Roboto_500Medium;
  font-size: 30px;
  letter-spacing: 0.3px;
  text-align: center;

  color: #212121;
`;

export const Form = styled.View`
  margin-bottom: 16px;
`;

export const InputsWrap = styled.View`
  gap: 16px;
  margin-bottom: 43px;
`;

export const Input = styled.TextInput`
  ${text}
  padding: 16px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid ${({ focus }) => (focus ? "#FF6C00" : "#E8E8E8")};
  background-color: #f6f6f6;
`;

export const InputPassWrap = styled.View`
  position: relative;
`;

export const inputPass = css`
  padding-right: 87px;
`;
export const BtnShow = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const BtnShowText = styled.Text`
  ${text}
  color:#1B4371;
`;
export const BtnForm = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: #ff6c00;
`;

export const BtnFormText = styled.Text`
  ${text}
  padding: 16px;

  text-align: center;
  color: #ffffff;
`;

export const BtnReg = styled.TouchableOpacity`
  flex-direction: row;
  gap: 3px;
  margin: 0 auto;
`;

export const BtnRegText = styled.Text`
  ${text}
  color:#1B4371;
`;

export const TextUnderline = styled.Text`
  ${text}
  color:#1B4371;
  text-decoration: underline;
`;

// !-----------------------------------

export const RegistrationContainer = styled.View`
  padding: 0 16px 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  background-color: #ffffff;
  padding-bottom: ${({ focus }) => (focus ? "32px" : "45px")};
`;

export const ImageBox = styled.View`
  position: relative;
  margin: -60px auto 32px;
`;
export const Image = styled.View`
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;

export const IconWrap = styled.View`
  position: absolute;
  bottom: 14px;
  right: -12px;
`;
