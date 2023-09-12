import { FollowUserInfoContainer } from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';
import { useQuery } from '@tanstack/react-query';
import getUserData from '@apis/user/getUserData';

interface FollowUserInfoProps {
  userId: string;
}

const FollowUserInfo = ({ userId }: FollowUserInfoProps) => {
  const { status, data: user } = useQuery({
    queryKey: ['followUser', userId],
    queryFn: async () => await getUserData(userId)
  });

  return status === 'loading' ? (
    <span>Loading..</span>
  ) : (
    <FollowUserInfoContainer>
      <BadgeAvatar
        alt={user.fullName}
        src={'https://picsum.photos/200/300'}
        size={39}
        online={user.isOnline}
      />
      <UserId email={user.email} />
      <UserName>{user.fullName}</UserName>
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
