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
    <NoticeItemContainer>
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
