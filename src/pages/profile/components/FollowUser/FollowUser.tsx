import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { postFollowUser, deleteFollowUser } from '@apis/follow';
import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '../FollowUserInfo';
import { User } from '@types';
import { useRecoilValue } from 'recoil';
import { userState } from '@states/userState';

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
  // const { token } = useRecoilValue(userState);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NTczMDA5fQ.gWqpTse9wQarIavekn0M2H6RTVlm9IBZ8MZrC6FvYqA';

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
