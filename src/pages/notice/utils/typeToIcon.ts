import { NOTICE_TYPE } from '../constants';
const typeToIconName = (type: string) => {
  switch (type) {
    case NOTICE_TYPE.COMMENT:
      return 'chat';
    case NOTICE_TYPE.LIKE:
      return 'favorite';
    case NOTICE_TYPE.FOLLOW:
      return 'person_add';
    default:
      return;
  }
};

export default typeToIconName;
