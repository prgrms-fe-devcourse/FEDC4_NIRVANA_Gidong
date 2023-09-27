import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useSessionStorage from '@hooks/useSessionStorage';
import { deleteFollowUser, postFollowUser } from '@apis/follow';
import { postNotifications } from '@apis/notice';
import { Button } from '@components/Button';
import { User } from '@/types';

interface FollowButtonProps {
  followingDataId: string; // 삭제용 - following data id
  followingUserId: string; // 팔로우용 - 팔로우할 userId
  followedThisUser: boolean;
  followerTab?: boolean;
  refetch?: () => void;
  width?: number;
  height?: number;
  fontSize?: number;
}

const FollowButton = ({
  followingDataId,
  followingUserId,
  followedThisUser,
  followerTab,
  width = 68,
  height = 30,
  fontSize = 12,

  refetch
}: FollowButtonProps) => {
  const [{ token, _id: myId }] = useSessionStorage<Pick<User, 'token' | '_id'>>(
    'userData',
    {
      token: '',
      _id: ''
    }
  );

  const { userId: profileUserId } = useParams<{ userId: string }>();

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
    mutate();
  };
  const checkFollowButtonVisibility = () => {
    if (profileUserId !== myId && myId !== followingUserId) {
      return true;
    } else if (myId === followingUserId) {
      return false;
    } else if (followerTab && followed) {
      return false;
    } else {
      return true;
    }
  };

  return (
    checkFollowButtonVisibility() && (
      <Button
        width={width}
        height={height}
        dark={followed ? false : true}
        label={followed ? '팔로잉' : '팔로우'}
        fontSize={fontSize}
        bold={true}
        handleClick={handleClickFollow}
        textColor={followed ? 'greyLight' : 'white'}
        backgroundColor={followed ? 'white' : 'purpleDark'}
      />
    )
  );
};

export default FollowButton;
