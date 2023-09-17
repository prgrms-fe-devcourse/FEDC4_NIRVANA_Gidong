import { useQueries } from '@tanstack/react-query';
import FollowUser from './FollowUser';
import { Follow } from '@/types';
import { getFollowUser } from '@apis/follow';

const dumyData = [
  // following
  {
    _id: '64ff5428cd98920f0d4cab1e',
    user: '64ff4bc7e044e9076a2cb3dd',
    follower: '64ff16cc169c79057b5f8ec0',
    createdAt: '2023-09-11T17:53:44.961Z',
    updatedAt: '2023-09-11T17:53:44.961Z',
    __v: 0
  },
  {
    _id: '65012092ba302b4a8f4f8f1c',
    user: '64ff1661169c79057b5f8eb8',
    follower: '64ff16cc169c79057b5f8ec0',
    createdAt: '2023-09-13T02:38:10.952Z',
    updatedAt: '2023-09-13T02:38:10.952Z',
    __v: 0
  }
];
interface FollowUsersProps {
  following: boolean;
  data?: Follow[];
}

const FollowUsers = ({ following, data = dumyData }: FollowUsersProps) => {
  const followUsers = useQueries({
    queries: data.map((element) => {
      return {
        queryKey: ['followUser', element._id],
        queryFn: () => getFollowUser(element.user, element)
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
              followUser={data.user}
              key={data._id}
              following={following}
            />
          );
        })}
      </>
    )
  );
};
export default FollowUsers;
