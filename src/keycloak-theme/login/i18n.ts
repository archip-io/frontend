import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
    en: {
        createAccount: 'Create an account',
        doLogIn: 'Login',
        doRegister: 'Register',
        email: 'E-mail',
        emailVerifyInstruction1: 'We have sent confirmation to:',
        emailVerifyInstruction2: 'Check your email and click on the link to continue',
        emailVerifyInstruction3: 'to resend the email',
        emailVerifyTitle: 'Email verification',
        'error-invalid-length-too-long': 'Maximal length is {2}.',
        'error-invalid-length-too-short': 'Minimal length is {1}.',
        gmailLogin: 'Login with Gmail',
        haveAccount: 'Already have an account?',
        loginTitle: 'Login',
        noAccount: "Don't have an account yet?",
        or: 'or',
        passwordPatternError: 'The password must contain uppercase and lowercase letters, numbers and special characters.',
        registerTitle: 'Register',
        resetPasswordText: 'Enter the username or email address associated with your account and we will send you a link to reset your password',
        usernameOrEmail: 'Username or E-mail',
    },
    ru: {
        createAccount: 'Создать аккаунт',
        doLogIn: 'Войти',
        doRegister: 'Зарегистрироваться',
        email: 'Адрес электронной почты',
        emailVerifyInstruction1: 'Мы отправили подтверждение по адресу:',
        emailVerifyInstruction2: 'Проверьте вашу почту и нажмите на ссылку, чтобы продолжить',
        emailVerifyInstruction3: 'чтобы повторно отправить письмо',
        emailVerifyTitle: 'Подтвердите адрес электронной почты',
        'error-invalid-length-too-long': 'Максимальная длина – {2}.',
        'error-invalid-length-too-short': 'Минимальная длина — {1}.',
        gmailLogin: 'Войти с помощью Gmail',
        haveAccount: 'Уже есть аккаунт?',
        loginTitle: 'Вход',
        noAccount: 'Ещё нет аккаунта?',
        or: 'или',
        passwordPatternError: 'Пароль должен содержать заглавную и строчную буквы, цифры и специальные символы.',
        registerTitle: 'Регистрация',
        resetPasswordText:
            'Введите имя пользователя или адрес электронный почты, связанный с аккаунтом, и мы отправим ссылку для восстановления пароля',
        usernameOrEmail: 'Имя пользователя или адрес электронной почты',
    },
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
