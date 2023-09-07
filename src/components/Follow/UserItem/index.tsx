import styled from '@emotion/styled';
import { FollowUser } from '@/components/User';

const UserItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  width: 338px;
  height: 80px;
`;

const DotState = styled.span<{ online: boolean }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({ online, theme }) =>
    online ? theme.greenVivid : theme.greyLight};
  border-radius: 15px;
`;

interface UserItemProps {
  src: string;
  alt: string;
  nickname: string;
  email: string;
  online: boolean;
}

const UserItem = ({ src, alt, nickname, email, online }: UserItemProps) => {
  const id = email.split('@')[0];
  return (
    <UserItemLayout>
      <FollowUser
        src={src}
        alt={alt}
        nickname={nickname}
        id={id}
      />
      <DotState online={online} />
    </UserItemLayout>
  );
};
export default UserItem;
