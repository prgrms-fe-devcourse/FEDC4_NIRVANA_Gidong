import { useEffect, useState } from 'react';
import { Comment } from '@/types/Comment';
import { Notification } from '@/types/Notification';
import { MESSAGE_TYPE, NOTICE_TYPE } from '@pages/notice/constants';
import { useNavigate } from 'react-router-dom';

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

interface GoToNotificationOriginProps {
  type: string;
  id: string;
}

const NoticeItem = ({
  profileImage,
  type,
  comment,
  authorName,
  notification
}: NoticeItemProps) => {
  const [typeId, setTypeId] = useState('');
  const navigate = useNavigate();

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

  const GoToNotificationOrigin = ({
    type,
    id
  }: GoToNotificationOriginProps) => {
    switch (type) {
      case NOTICE_TYPE.COMMENT:
        navigate(`/post/${id}`);
        return;
      case NOTICE_TYPE.LIKE:
        navigate(`/post/${id}`);
        return;
      case NOTICE_TYPE.FOLLOW:
        navigate(`/profile/${id}`);
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    if (type === NOTICE_TYPE.COMMENT) {
      setTypeId(notification.post);
    }
    if (type === NOTICE_TYPE.LIKE) {
      setTypeId(notification.post);
    }
    if (type === NOTICE_TYPE.FOLLOW) {
      setTypeId(notification.author._id);
    }
  }, [notification, type, typeId]);

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
