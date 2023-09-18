import {
  NoticeItemContainer,
  NoticeContent,
  Message,
  MessagePreview,
  ProfileImage
} from './NoticeItem.style';

interface NoticeItemProps {
  item: string;
  key: number;
  profileImage: string;
  active: boolean;
  type: 'followed' | 'comment';
  comment: string;
}

const NoticeItem = ({
  item,
  key,
  profileImage,
  active,
  type,
  comment
}: NoticeItemProps) => {
  return (
    <NoticeItemContainer key={key}>
      <ProfileImage profileImage={profileImage} />
      <NoticeContent>
        <Message active={active}>{item}</Message>
        {type === 'comment' && <MessagePreview>{comment}</MessagePreview>}
      </NoticeContent>
    </NoticeItemContainer>
  );
};

export default NoticeItem;
