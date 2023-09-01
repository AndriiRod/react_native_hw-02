import styled, { css } from "@emotion/native";

const text = css`
  font-family: Roboto_400Regular;
  font-size: 16px;
`;

export const FormContainer = styled.View`
  padding: 32px 16px 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  background-color: #ffffff;
`;

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

const input = css`
  ${text}

  padding: 16px;

  height: 50px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;

  background-color: #f6f6f6;
`;

export const InputMail = styled.TextInput`
  ${input}

  border: 1px solid ${(props) => (props.focus ? "red" : "blue")};
`;

export const InputPassWrap = styled.View`
  margin: 16px 0 43px;
  position: relative;
`;

export const InputPass = styled.TextInput`
  ${input}

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
