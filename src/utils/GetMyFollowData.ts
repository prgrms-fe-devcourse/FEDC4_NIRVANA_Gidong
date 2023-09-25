import { Follow } from '@/types/Follow';

const GetMyFollowData = (
  followers: Follow[],
  currentUserId: string
): Follow => {
  if (followers && followers.length > 0 && currentUserId) {
    return followers.find((follow) => follow._id === currentUserId);
  }
};

export default GetMyFollowData;
