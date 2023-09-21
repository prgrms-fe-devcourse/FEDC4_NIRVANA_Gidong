const encodeURIValue = (keyword: string) => {
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (keyword.match(check_kor)) {
    encodeURI(keyword);
  }

  return keyword;
};

export default encodeURIValue;
