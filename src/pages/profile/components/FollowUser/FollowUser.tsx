import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { postFollowUser, deleteFollowUser } from '@apis/follow';
import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '../FollowUserInfo';
import { User, Follow } from '@types';

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
  const [follow, setFollow] = useState(true);

  const { refetch } = useQuery({
    queryKey: ['follow'],
    queryFn: async () => {
      let data = {};

      if (follow) {
        data = await deleteFollowUser(followDataId);
      } else {
        data = await postFollowUser(followUser._id);
      }

      return data;
    },
    enabled: false
  });

  const handleClickFollow = async () => {
    await refetch();
    setFollow((prev) => !prev);
  };

  return (
    <FollowUserContainer>
      <FollowUserInfo userData={followUser} />
      {following &&
        (follow ? (
          <FollowButton
            width={68}
            height={30}
            label='팔로우'
            dark={false}
            bold={true}
            handleClick={handleClickFollow}
          />
        ) : (
          <FollowButton
            width={68}
            height={30}
            label='팔로잉'
            dark={true}
            bold={true}
            handleClick={handleClickFollow}
          />
        ))}
    </FollowUserContainer>
  );
};
export default FollowUser;
