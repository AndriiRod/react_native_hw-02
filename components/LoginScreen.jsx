import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

const LoginScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Адреса електронної пошти"
          placeholderTextColor={"#BDBDBD"}
          style={[styles.formInput, isFocused ? styles.inputFocused : null]}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <View style={styles.passInputWrap}>
          <TextInput
            placeholder="Пароль"
            placeholderTextColor={"#BDBDBD"}
            style={[styles.formInput, styles.passwordInput]}
            secureTextEntry={true}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.showBtn}>
            <Text style={styles.btnText}>Показать</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.entersBtn}>
          <Text style={styles.entersBtnText}>Увійти</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.regBtnLink}>
        <Text style={styles.regBtnLinkText}>Немає акаунту?</Text>
        <Text style={[styles.regBtnLinkText, styles.textUnderline]}>
          Зареєструватися
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const testSyles = StyleSheet.create({
  textColor: {
    color: "red",
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 111,
    paddingLeft: 16,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    color: "#212121",
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 33,
  },

  form: {
    marginBottom: 16,
  },

  formInput: {
    height: 50,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,

    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    padding: 16,
  },

  inputFocused: {
    borderColor: "#FF6C00",
  },
  passInputWrap: {
    marginTop: 16,
    marginBottom: 43,
  },

  passwordInput: {
    paddingRight: 87,
    position: "relative",
  },
  btnText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  showBtn: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  entersBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  entersBtnText: {
    color: "#ffffff",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    textAlign: "center",
    padding: 16,
  },
  regBtnLink: {
    flexDirection: "row",
    gap: 3,
    marginLeft: "auto",
    marginRight: "auto",
  },
  regBtnLinkText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
