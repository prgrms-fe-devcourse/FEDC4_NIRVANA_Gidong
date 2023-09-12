import { Button as FollowButton } from '@components/Button';
import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo } from '../FollowUserInfo';
import { FollowUserData } from '../../types';

// TODO : follow, following logic 추가될 예정

interface FollowUserItemProps {
  data: FollowUserData;
  following: boolean;
}

const FollowUserItem = ({ data, following }: FollowUserItemProps) => {
  return (
    <FollowUserContainer>
      <FollowUserInfo userData={data} />
      {following && (
        <FollowButton
          width={68}
          height={30}
          label='팔로우'
          dark={true}
          bold={true}
        />
      )}
    </FollowUserContainer>
  );
};
export default FollowUserItem;
