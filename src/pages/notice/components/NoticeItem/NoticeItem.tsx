import { useState, useEffect } from 'react';
import { Comment } from '@/types/Comment';
import { MESSAGE_TYPE, NOTICE_TYPE } from '@pages/notice/constants';
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
}

const NoticeItem = ({
  profileImage,
  type,
  comment,
  authorName
}: NoticeItemProps) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    switch (type) {
      case NOTICE_TYPE.COMMENT:
        setMessage(MESSAGE_TYPE.COMMENT);
        break;
      case NOTICE_TYPE.LIKE:
        setMessage(MESSAGE_TYPE.LIKE);
        break;
      case NOTICE_TYPE.FOLLOW:
        setMessage(MESSAGE_TYPE.FOLLOW);
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <NoticeItemContainer>
      <ProfileImage profileImage={profileImage} />
      <NoticeContent>
        <Message>
          <span>{authorName}</span>
          {message}
        </Message>
        {type === NOTICE_TYPE.COMMENT && (
          <MessagePreview>{comment && comment.comment}</MessagePreview>
        )}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
