import { FollowUser } from '../FollowUser';
import { Follow } from '@types';

const dumyData = [
  {
    _id: '64ff44d8e044e9076a2cb39e',
    user: '64ff1661169c79057b5f8eb8',
    follower: '64ff16cc169c79057b5f8ec0',
    createdAt: '2023-09-11T16:48:24.723Z',
    updatedAt: '2023-09-11T16:48:24.723Z',
    __v: 0
  }
];

interface FollowUsersProps {
  following: boolean;
  data?: Follow[];
}

const FollowUsers = ({ following, data = dumyData }: FollowUsersProps) => {
  return (
    <>
      {data.map((element: Follow) => (
        <FollowUser
          followUserData={element}
          key={element._id}
          following={following}
        />
      ))}
    </>
  );
};
export default FollowUsers;
