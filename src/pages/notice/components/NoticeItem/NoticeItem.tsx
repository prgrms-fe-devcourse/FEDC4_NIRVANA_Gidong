import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Comment } from '@/types/Comment';
import { NOTICE_TYPE } from '@pages/notice/constants';
import typeToMessage from '@pages/notice/utils/typeToMessage';
import typeToPath from '@pages/notice/utils/typeToNavigate';
import typeToIconName from '@pages/notice/utils/typeToIcon';
import { Icon } from '@components/Icon';
import { Avatar } from '@components/Avatar';
import {
  Message,
  MessagePreview,
  NoticeContent,
  NoticeItemContainer,
  ProfileImage,
  MessageText
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

  const GoToNotificationOrigin = ({ type, id }: GoToNotificationOriginProps) =>
    navigate(typeToPath(type, id));

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
      <ProfileImage>
        <Avatar
          alt={authorName}
          src={profileImage}
          size={40}
        />
      </ProfileImage>
      <NoticeContent>
        <Message>
          <MessageText>{typeToMessage(type)}</MessageText>
          <Icon
            name={typeToIconName(type)}
            color={'purpleNormal'}
            fill={true}
            size={13}
          />
        </Message>
        {type === NOTICE_TYPE.COMMENT && (
          <MessagePreview>
            {comment && comment.comment.length > 25
              ? comment.comment.slice(0, 50) + '...'
              : comment.comment}
          </MessagePreview>
        )}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
