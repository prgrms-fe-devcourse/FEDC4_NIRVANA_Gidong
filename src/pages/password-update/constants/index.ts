const USER_INPUT = {
  NEW_PASSWORD: {
    NAME: 'password',
    PLACE_HOLDER: 'password',
    TYPE: 'password',
    TITLE: '새 비밀번호',
    ERROR_MESSAGE: '사용할 수 없는 비밀번호 입니다',
    SUCCESS_MESSAGE: '사용 가능한 비밀번호 입니다'
  },
  NEW_PASSWORD_CONFIRM: {
    NAME: 'passwordConfirm',
    PLACE_HOLDER: 'password',
    TYPE: 'password',
    TITLE: '비밀번호 확인',
    ERROR_MESSAGE: '비밀번호가 일치하지 않습니다',
    SUCCESS_MESSAGE: '비밀번호가 일치합니다'
  }
};

const PASSWORD_HINT = `비밀번호는 영문자, 특수문자, 숫자 중 2가지 이상을 포함한 8~32개의 문자로 이뤄져야 합니다.`;

const LABEL = {
  CHANGE_PASSWORD: '변경하기'
};

export { USER_INPUT, PASSWORD_HINT, LABEL };
