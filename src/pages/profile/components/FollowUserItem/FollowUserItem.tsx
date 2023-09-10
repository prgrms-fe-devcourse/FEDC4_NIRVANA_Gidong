import { FollowUserItemLayout } from './FollowUserItem.style';
import { FollowUser } from '../FollowUser';
import { FollowButton } from '../FollowButton';

// TODO : follow, following logic 추가될 예정

interface FollowUserItemProps {
  data: {
    _id: string;
    fullName: string;
    isOnline: boolean;
    email: string;
    image: string;
  };
  following: boolean;
}

const FollowUserItem = ({ data, following }: FollowUserItemProps) => {
  return (
    <FollowUserItemLayout>
      <FollowUser userData={data} />
      {following && <FollowButton />}
    </FollowUserItemLayout>
  );
};
export default FollowUserItem;
