export const isEmailOk = (email: string) => {
  return new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}').test(email);
};

export const isNicknameOk = (nickname: string) => {
  return nickname.length >= 1 && nickname.length <= 8;
};

export const isPasswordOk = (password: string) => {
  const lengthOk =
    !password.includes(' ') && password.length >= 8 && password.length <= 32;
  const containsAlphabet = /[a-zA-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);
  const containsSpecialChar = /[!@#$%^&*]/.test(password);
  const containsOk =
    [containsAlphabet, containsNumber, containsSpecialChar].filter(
      (condition) => condition
    ).length >= 2;
  return lengthOk && containsOk;
};
