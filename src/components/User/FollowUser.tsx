import styled from '@emotion/styled';
import { Avatar } from '../Avatar';

const UserItem = styled.div`
  display: flex;
  align-items: center;
`;

const UserNickName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
  margin-left: 15px;
  margin-right: 2px;
`;
const UserId = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.greyLight};
`;

interface FollowUserProps {
  alt: string;
  src: string;
  nickname: string;
  id: string;
}

const FollowUser = ({ src, alt, nickname, id }: FollowUserProps) => {
  return (
    <UserItem>
      <Avatar
        src={src}
        alt={alt}
        size={39}
      />
      <UserNickName>{nickname}</UserNickName>
      <UserId>@{id}</UserId>
    </UserItem>
  );
};
export default FollowUser;
