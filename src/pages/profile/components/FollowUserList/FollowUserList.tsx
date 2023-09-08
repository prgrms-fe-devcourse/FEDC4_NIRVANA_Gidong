import styled from '@emotion/styled';
import { FollowUserItem } from '../FollowUserItem';

const FollowUserListLayout = styled.div``;

interface FollowUserList {
  following: boolean;
}

const FollowUserList = ({ following = true }) => {
  return (
    <FollowUserListLayout>
      <FollowUserItem />
      <FollowUserItem />
      <FollowUserItem />
      <FollowUserItem />
    </FollowUserListLayout>
  );
};
export default FollowUserList;
