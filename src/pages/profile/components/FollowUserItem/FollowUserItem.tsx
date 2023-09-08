import { FollowUserItemLayout } from './FollowUserItem.style';
import { FollowUser } from '../FollowUser';
import { FollowButton } from '../FollowButton';

const FollowUserItem = () => {
  return (
    <FollowUserItemLayout>
      <FollowUser
        userData={{
          image: 'https://picsum.photos/200/300',
          fullName: '물푸른',
          isOnline: true,
          email: 'blueWater@naver.com'
        }}
      />
      <FollowButton />
    </FollowUserItemLayout>
  );
};
export default FollowUserItem;
