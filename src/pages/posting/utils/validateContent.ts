const validateContent = (content: string): boolean => {
  let validation = false;

  if (content.length > 0) {
    validation = true;
  }

  return validation;
};

export default validateContent;
