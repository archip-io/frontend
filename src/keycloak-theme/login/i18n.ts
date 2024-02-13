import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
  en: {
    createAccount: "Create an account",
    doForgotPassword: "Forgot password?",
    doLogIn: "Login",
    gmailLogin: "Login with Gmail",
    loginTitle: "Login",
    noAccount: "Don't have an account yet?",
    or: "or",
    password: "Password",
    usernameOrEmail: "Username or email address",
  },
  ru: {
    createAccount: "Создать аккаунт",
    doForgotPassword: "Забыли пароль?",
    doLogIn: "Войти",
    gmailLogin: "Войти с помощью Gmail",
    loginTitle: "Вход",
    noAccount: "Ещё нет аккаунта?",
    or: "или",
    password: "Пароль",
    usernameOrEmail: "Имя пользователя или адрес электронной почты",
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
