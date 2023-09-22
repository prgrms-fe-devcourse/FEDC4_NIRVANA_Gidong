import { NOTICE_TYPE, MESSAGE_TYPE } from '../constants';
const typeToMessage = (type: string) => {
  switch (type) {
    case NOTICE_TYPE.COMMENT:
      return MESSAGE_TYPE.COMMENT;
    case NOTICE_TYPE.LIKE:
      return MESSAGE_TYPE.LIKE;
    case NOTICE_TYPE.FOLLOW:
      return MESSAGE_TYPE.FOLLOW;
    default:
      return;
  }
};

export default typeToMessage;
