import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useSessionStorage from '@hooks/useSessionStorage';
import { deleteFollowUser, postFollowUser } from '@apis/follow';
import { Button } from '@components/Button';
import { User } from '@/types';

interface FollowButtonProps {
  followingDataId: string; // 삭제용 - following data id
  followingUserId: string; // 팔로우용 - 팔로우할 userId
  following?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  refetch?: () => void;
}

const FollowButton = ({
  followingDataId,
  followingUserId,
  following = true,
  width = 68,
  height = 30,
  fontSize = 12,
  refetch
}: FollowButtonProps) => {
  const [followed, setFollowed] = useState(following);
  const [dataId, setDataId] = useState(followingDataId);
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const { token } = userSessionData;
  const { mutate } = useMutation(
    () =>
      followed
        ? deleteFollowUser(dataId, token)
        : postFollowUser(followingUserId, token),
    {
      onSuccess: (data) => {
        if (!followed) {
          setDataId(data._id);
        }
        refetch();
        setFollowed((prev) => !prev);
      }
    }
  );

  const handleClickFollow = () => {
    mutate();
  };

  return (
    <Button
      width={width}
      height={height}
      dark={followed ? false : true}
      label={followed ? '팔로우' : '팔로잉'}
      fontSize={fontSize}
      bold={true}
      handleClick={handleClickFollow}
    />
  );
};

export default FollowButton;
