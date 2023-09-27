import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useSessionStorage from '@hooks/useSessionStorage';
import { deleteFollowUser, postFollowUser } from '@apis/follow';
import { postNotifications } from '@apis/notice';
import { Button } from '@components/Button';
import type { User } from '@/types';

interface FollowButtonProps {
  followingDataId: string; // 삭제용 - following data id
  followingUserId: string; // 팔로우용 - 팔로우할 userId
  followedThisUser?: boolean;
  possibleDeleteFollow: boolean;
  refetch?: () => void;
  width?: number;
  height?: number;
  fontSize?: number;
}

const FollowButton = ({
  followingDataId,
  followingUserId,
  possibleDeleteFollow,
  followedThisUser = true,
  width = 80,
  height = 30,
  fontSize = 12,
  refetch
}: FollowButtonProps) => {
  const [{ token }] = useSessionStorage<Pick<User, 'token'>>('userData', {
    token: ''
  });

  const [followed, setFollowed] = useState(followedThisUser);
  const [dataId, setDataId] = useState(followingDataId);

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
        refetch && refetch();

        setFollowed((prev) => !prev);
      }
    }
  );

  const handleClickFollow = () => {
    if (!followed || possibleDeleteFollow) {
      mutate();
    }
  };

  return (
    <Button
      width={width}
      height={height}
      borderRadius={30}
      label={followed ? '팔로잉' : '팔로우'}
      fontSize={fontSize}
      bold={true}
      dark={followed ? false : true}
      handleClick={handleClickFollow}
      textColor={followed ? 'greyLight' : 'white'}
      backgroundColor={followed ? 'white' : 'purpleDark'}
    />
  );
};

export default FollowButton;
