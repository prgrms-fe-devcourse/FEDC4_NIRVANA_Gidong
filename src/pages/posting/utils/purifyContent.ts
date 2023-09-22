const purifyContent = (content: string): string => {
  const tmp = document.createElement('div');
  tmp.innerHTML = content;
  return tmp.textContent || tmp.innerText || '';
};

export default purifyContent;
