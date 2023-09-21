import { useEffect, useState } from 'react';
import { Comment } from '@/types/Comment';
import { Notification } from '@/types/Notification';
import { MESSAGE_TYPE, NOTICE_TYPE } from '@pages/notice/constants';
import GoToNotificationOrigin from '@pages/notice/utils/GoToNotificationOrigin';
import {
  NoticeItemContainer,
  NoticeContent,
  Message,
  MessagePreview,
  ProfileImage
} from './NoticeItem.style';

interface NoticeItemProps {
  profileImage: string;
  type: string;
  comment?: Comment | null;
  authorName: string;
  notification: Notification;
}

const NoticeItem = ({
  profileImage,
  type,
  comment,
  authorName,
  notification
}: NoticeItemProps) => {
  const [typeId, setTypeId] = useState('');
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

  return (
    <NoticeItemContainer
      onClick={() => GoToNotificationOrigin({ type, id: typeId })}>
      <ProfileImage profileImage={profileImage} />
      <NoticeContent>
        <Message>
          <span>{authorName}</span>
          {typeToMessage(type)}
        </Message>
        {type === NOTICE_TYPE.COMMENT && (
          <MessagePreview>{comment && comment.comment}</MessagePreview>
        )}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
