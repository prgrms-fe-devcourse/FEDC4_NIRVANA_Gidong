import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { postFollowUser, deleteFollowUser } from '@apis/follow';
import useSessionStorage from '@hooks/useSessionStorage';
import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '@pages/profile/components';
import { User } from '@types';

interface FollowUserProps {
  following: boolean;
  followUser: User;
  followDataId: string;
}

const FollowUser = ({
  followDataId,
  followUser,
  following
}: FollowUserProps) => {
  const [followed, setFollowed] = useState(true);
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const { token } = userSessionData;

  const { refetch } = useQuery({
    queryKey: ['follow'],
    queryFn: async () => {
      const data = followed
        ? await deleteFollowUser(followDataId, token)
        : await postFollowUser(followUser._id, token);

      return data;
    },
    enabled: false
  });

  const handleClickFollow = async () => {
    await refetch();
    setFollowed((prev) => !prev);
  };

  const { fullName, image, isOnline, email } = followUser;

  return (
    <FollowUserContainer>
      <FollowUserInfo
        fullName={fullName}
        image={image}
        isOnline={isOnline}
        email={email}
      />
      {following && (
        <FollowButton
          width={68}
          height={30}
          label={followed ? '팔로우' : '팔로잉'}
          dark={followed ? false : true}
          bold={true}
          handleClick={handleClickFollow}
        />
      )}
    </FollowUserContainer>
  );
};
export default FollowUser;
