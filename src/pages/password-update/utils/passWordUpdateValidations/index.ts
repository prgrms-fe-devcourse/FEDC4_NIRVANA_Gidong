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

export default isPasswordOk;
