import { useState } from 'react';
import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '../FollowUserInfo';
import { Follow } from '@types';
import { useQuery } from '@tanstack/react-query';
import { deleteUnfollowUser } from '@apis/follow';
import { postFollowUser } from '@apis/follow';

// TODO : follow, following logic 추가될 예정

interface FollowUserItemProps {
  followUserData: Follow;
  following: boolean;
}

const FollowUserItem = ({ followUserData, following }: FollowUserItemProps) => {
  const [follow, setFollow] = useState(true);

  const {
    status,
    data: followData,
    refetch
  } = useQuery({
    queryKey: ['follow'],
    queryFn: async () => {
      let data = {};
      console.log(follow);
      if (follow) {
        data = await deleteUnfollowUser(followUserData._id);
      } else {
        console.log(followUserData.user);
        data = await postFollowUser(followUserData.user);
      }

      return data;
    },
    enabled: false
  });

  console.log(followData);

  return (
    <FollowUserContainer>
      <FollowUserInfo userData={followUserData} />
      {following &&
        (follow ? (
          <FollowButton
            width={68}
            height={30}
            label='팔로우'
            dark={false}
            bold={true}
            handleClick={async () => {
              await refetch();
              setFollow((prev) => !prev);
            }}
          />
        ) : (
          <FollowButton
            width={68}
            height={30}
            label='팔로잉'
            dark={true}
            bold={true}
            handleClick={() => {
              refetch();
              setFollow((prev) => !prev);
            }}
          />
        ))}
    </FollowUserContainer>
  );
};
export default FollowUserItem;
