import { Avatar } from '../Avatar';
import { UserItem, UserNickName, UserId } from './FollowUser.style';

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
