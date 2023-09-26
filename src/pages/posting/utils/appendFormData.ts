const appendFormData = (keys: string[], ...args: (string | Blob)[]) => {
  const formData = new FormData();

  keys.forEach((key, index) => {
    formData.append(key, args[index]);
  });

  return formData;
};

export default appendFormData;
