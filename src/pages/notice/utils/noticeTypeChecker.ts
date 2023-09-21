import { Notification } from '@/types/Notification';
import { NOTICE_TYPE } from '../constants';

const noticeTypeChecker = (notice: Notification) => {
  if (notice.follow) {
    return NOTICE_TYPE.FOLLOW;
  }
  if (notice.comment) {
    return NOTICE_TYPE.COMMENT;
  }

  return NOTICE_TYPE.LIKE;
};

export default noticeTypeChecker;
