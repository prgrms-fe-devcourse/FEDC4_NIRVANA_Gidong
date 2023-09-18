import { useState, useEffect } from 'react';
import { Comment } from '@/types/Comment';
import {
  NoticeItemContainer,
  NoticeContent,
  Message,
  MessagePreview,
  ProfileImage
} from './NoticeItem.style';

interface NoticeItemProps {
  seen: boolean;
  key: string;
  profileImage: string;
  type: string;
  comment?: Comment | null;
  authorName: string;
}

const NoticeItem = ({
  seen,
  key,
  profileImage,
  type,
  comment,
  authorName
}: NoticeItemProps) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    switch (type) {
      case 'COMMENT':
        setMessage(' 님이 회원님의 게시물에 댓글을 남겼습니다');
        break;
      case 'LIKE':
        setMessage(' 님이 회원님의 게시물을 좋아합니다');
        break;
      case 'FOLLOW':
        setMessage(' 님이 회원님을 팔로우합니다');
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <NoticeItemContainer key={key}>
      <ProfileImage profileImage={profileImage} />
      <NoticeContent>
        <Message active={seen}>
          <span>{authorName}</span>
          {message}
        </Message>
        {type === 'COMMENT' && (
          <MessagePreview>{comment && comment.comment}</MessagePreview>
        )}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
