import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useSessionStorage from '@hooks/useSessionStorage';
import { deleteFollowUser, postFollowUser } from '@apis/follow';
import { postNotifications } from '@apis/notice';
import { Button } from '@components/Button';
import { User } from '@/types';

interface FollowButtonProps {
  followingDataId: string; // 삭제용 - following data id
  followingUserId: string; // 팔로우용 - 팔로우할 userId
  following?: boolean;
}

const FollowButton = ({
  followingDataId,
  followingUserId,
  following = true
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
          postNotifications(token, {
            notificationType: 'FOLLOW',
            notificationTypeId: data._id,
            userId: followingUserId,
            postId: null
          });
        }

        setFollowed((prev) => !prev);
      }
    }
  );

  const handleClickFollow = () => {
    mutate();
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
