const shortenString = (sentence: string, stringLimit: number) => {
  return `${sentence.substring(0, 100)}${
    sentence.length > stringLimit ? '...' : ''
  }`;
};

export default shortenString;
