import { Follow } from '@/types/Follow';

const GetMyFollowData = (
  followers: Follow[],
  currentUserId: string
): Follow => {
  if (followers && followers.length > 0 && currentUserId) {
    return followers.find((follow) => follow.follower === currentUserId);
  }
};

export default GetMyFollowData;
