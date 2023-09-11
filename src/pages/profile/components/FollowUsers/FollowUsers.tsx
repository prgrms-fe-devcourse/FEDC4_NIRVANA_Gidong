import { FollowUser } from '../FollowUser';
import { FollowUserData } from '../../types';

const dumyData = [
  {
    _id: '1234',
    fullName: '물푸른',
    isOnline: true,
    email: 'bluewater@naver.com',
    image: 'https://picsum.photos/200/300'
  },
  {
    _id: '12345',
    fullName: '수연조',
    isOnline: false,
    email: 'suyeon@naver.com',
    image: 'https://picsum.photos/200/300'
  }
];

interface FollowUsersProps {
  following: boolean;
  data?: FollowUserData[];
}

const FollowUsers = ({ following, data = dumyData }: FollowUsersProps) => {
  return (
    <div>
      {data.map((element) => (
        <FollowUser
          data={element}
          key={element._id}
          following={following}
        />
      ))}
    </div>
  );
};
export default FollowUsers;
