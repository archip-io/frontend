import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const USERNAME_MIN_LENGTH = 1
const USERNAME_MAX_LENGTH = 30
// @ts-ignore
const USERNAME_REGEX: RegExp = '^\\w+$'
export function useUsernameValidation() {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(' ')
  const validateUsername = () => {
    if (username.length === 0) {
      setUsernameError(' ')
      return
    }
    if (username.length < USERNAME_MIN_LENGTH) {
      setUsernameError(t('tooShortLengthError', { min: USERNAME_MIN_LENGTH }))
      return
    }
    if (username.length > USERNAME_MAX_LENGTH) {
      setUsernameError(t('tooLongLengthError', { max: USERNAME_MAX_LENGTH }))
      return
    }
    if (!username.match('^[A-Za-z]')) {
      setUsernameError(t('firstCharacterUsernameError'))
      return
    }
    if (!USERNAME_REGEX.test(username)) {
      setUsernameError(t('usernamePatternError'))
      return
    }
    setUsernameError(' ')
  }

  return {
    setUsername,
    username,
    usernameError,
    validateUsername,
  }
}

// @ts-ignore
const EMAIL_REGEX: RegExp = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
export function useEmailValidation() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(' ')
  const validateEmail = () => {
    if (email.length === 0) {
      setEmailError(' ')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(t('emailPatternError'))
      return
    }
    setEmailError(' ')
  }

  return {
    email,
    emailError,
    setEmail,
    validateEmail,
  }
}

const PASSWORD_MIN_LENGTH = 8
const PASSWORD_MAX_LENGTH = 64
// @ts-ignore
const PASSWORD_REGEX: RegExp = '^(?=.*[A-Z])(?=.*[\\W_])(?=.*[0-9])(?=.*[a-z]).+$'
export function usePasswordValidation() {
  const { t } = useTranslation()
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(' ')
  const validatePassword = () => {
    if (password.length === 0) {
      setPasswordError(' ')
      return
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
      setPasswordError(t('tooShortLengthError', { min: PASSWORD_MIN_LENGTH }))
      return
    }
    if (password.length > PASSWORD_MAX_LENGTH) {
      setPasswordError(t('tooLongLengthError', { max: PASSWORD_MAX_LENGTH }))
      return
    }
    if (!PASSWORD_REGEX.test(password)) {
      setPasswordError(t('passwordPatternError'))
      return
    }
    setPasswordError(' ')
  }

  return {
    password,
    passwordError,
    setPassword,
    validatePassword,
  }
}

export function usePasswordConfirmValidation(password: string) {
  const { t } = useTranslation()
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirmError, setPasswordConfirmError] = useState(' ')
  const validatePasswordConfirm = () => {
    if (passwordConfirm.length === 0) {
      setPasswordConfirmError(' ')
      return
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError(t('mismatchedPasswordConfirmError'))
      return
    }

    setPasswordConfirmError(' ')
  }

  return {
    passwordConfirm,
    passwordConfirmError,
    setPasswordConfirm,
    validatePasswordConfirm,
  }
}
