import { useState } from 'react';
import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '../FollowUserInfo';
import { Follow } from '@types';
import { useQuery } from '@tanstack/react-query';
import { deleteFollowUser } from '@apis/follow';
import { postFollowUser } from '@apis/follow';

// TODO : follow, following logic 추가될 예정

interface FollowUserProps {
  following: boolean;
  followUser: Pick<Follow, 'user'>;
  followDataId: Pick<Follow, '_id'>;
}

const FollowUser = ({
  followDataId,
  followUser,
  following
}: FollowUserProps) => {
  const [follow, setFollow] = useState(true);

  const { status, refetch } = useQuery({
    queryKey: ['follow'],
    queryFn: async () => {
      let data = {};
      console.log(follow);
      if (follow) {
        data = await deleteFollowUser(followDataId);
      } else {
        console.log(followUser);
        data = await postFollowUser(followUser);
      }

      return data;
    },
    enabled: false
  });

  console.log(status);

  const handleClickFollow = async () => {
    await refetch();
    setFollow((prev) => !prev);
  };

  return (
    <FollowUserContainer>
      <FollowUserInfo userId={followUser} />
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
