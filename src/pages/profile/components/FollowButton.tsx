import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useSessionStorage from '@hooks/useSessionStorage';
import { deleteFollowUser, postFollowUser } from '@apis/follow';
import { Button } from '@components/Button';
import { User } from '@/types';

interface FollowButtonProps {
  followDataId: string;
}

const FollowButton = ({ followDataId }: FollowButtonProps) => {
  const [followed, setFollowed] = useState(true);
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const { token, _id } = userSessionData;

  const { refetch } = useQuery({
    queryKey: ['follow'],
    queryFn: async () => {
      const data = followed
        ? await deleteFollowUser(followDataId, token)
        : await postFollowUser(_id, token);

      return data;
    },
    enabled: false
  });

  const handleClickFollow = async () => {
    await refetch();
    setFollowed((prev) => !prev);
  };

  return (
    <Button
      width={68}
      height={30}
      dark={followed ? false : true}
      label={followed ? '팔로우' : '팔로잉'}
      bold={true}
      handleClick={handleClickFollow}
    />
  );
};

export default FollowButton;
