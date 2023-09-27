import { useQueries, useQuery } from '@tanstack/react-query';
import { Follow, User } from '@/types';
import { getUser } from '@apis/user';
import { FollowUser } from '@pages/profile/components';
import useSessionStorage from '@hooks/useSessionStorage';
import checkMyFollow from '@utils/checkMyFollow';

interface FollowUsersProps {
  data?: Follow[];
  followerTab?: boolean;
}

const FollowUsers = ({ data, followerTab }: FollowUsersProps) => {
  const [{ _id: myUserId }] = useSessionStorage<Pick<User, '_id'>>('userData', {
    _id: ''
  });

  const { data: myUserData } = useQuery({
    queryKey: ['userData', myUserId],
    queryFn: async () => await getUser(myUserId)
  });

  const followUsers = useQueries({
    queries: data.map((element) => {
      return {
        queryKey: ['followUser', element._id],
        queryFn: () => getUser(!followerTab ? element.user : element.follower),
        select: (data: User) => {
          return {
            ...element,
            user: data
          };
        },
        enabled: data.length > 0
      };
    })
  });

  const Failed = followUsers.filter((element) => !element.isSuccess).length;

  return (
    Failed === 0 && (
      <>
        {followUsers.map(({ data }) => {
          return (
            <FollowUser
              followDataId={data._id}
              followerTab={followerTab}
              followUser={data.user}
              key={data._id}
              followedThisUser={checkMyFollow(
                myUserData?.following,
                data.user._id
              )}
            />
          );
        })}
      </>
    )
  );
};
export default FollowUsers;
