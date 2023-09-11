import { FollowUserItem } from '../FollowUserItem';

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

interface FollowUserData {
  _id: string;
  fullName: string;
  isOnline: boolean;
  email: string;
  image: string;
}

interface FollowUserListProps {
  following: boolean;
  data?: FollowUserData[];
}

const FollowUserList = ({
  following,
  data = dumyData
}: FollowUserListProps) => {
  return (
    <div>
      {data.map((element) => (
        <FollowUserItem
          data={element}
          key={element._id}
          following={following}
        />
      ))}
    </div>
  );
};
export default FollowUserList;
