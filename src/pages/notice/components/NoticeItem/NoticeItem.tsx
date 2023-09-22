import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Comment } from '@/types/Comment';
import { NOTICE_TYPE } from '@pages/notice/constants';
import typeToMessage from '@pages/notice/utils/typeToMessage';

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
  postId: string;
  followId: string;
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
  postId,
  followId
}: NoticeItemProps) => {
  const [typeId, setTypeId] = useState('');
  const navigate = useNavigate();

  const GoToNotificationOrigin = ({
    type,
    id
  }: GoToNotificationOriginProps) => {
    switch (type) {
      case NOTICE_TYPE.COMMENT:
        navigate(`/posts/${id}`);
        return;
      case NOTICE_TYPE.LIKE:
        navigate(`/posts/${id}`);
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
      setTypeId(postId);
    }
    if (type === NOTICE_TYPE.LIKE) {
      setTypeId(postId);
    }
    if (type === NOTICE_TYPE.FOLLOW) {
      setTypeId(followId);
    }
  }, [postId, followId, type, typeId]);

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
          <MessagePreview>
            {comment && comment.comment.length > 25
              ? comment.comment.slice(0, 25) + '...'
              : comment.comment}
          </MessagePreview>
        )}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
