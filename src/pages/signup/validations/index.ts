export const isEmailOk = (email: string) => {
  return new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}').test(email);
};

export const isNicknameOk = (nickname: string) => {
  return nickname.length >= 1 && nickname.length <= 8;
};

export const isPasswordOk = (password: string) => {
  return password.length >= 8 && password.length <= 16;
};
