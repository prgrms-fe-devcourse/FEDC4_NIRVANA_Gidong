import {
  SkeletonUserInfoContainer,
  SkeletonUserInfoItemContainer
} from './SearchFollowSkeleton.style';
import SkeletonFollowUserInfo from './SkeletonFollowUserInfo';

const SearchFollowSkeleton = () => {
  return (
    <>
      <SkeletonUserInfoItemContainer>
        <SkeletonUserInfoContainer>
          <SkeletonFollowUserInfo />
        </SkeletonUserInfoContainer>
      </SkeletonUserInfoItemContainer>
      <SkeletonUserInfoItemContainer>
        <SkeletonUserInfoContainer>
          <SkeletonFollowUserInfo />
        </SkeletonUserInfoContainer>
      </SkeletonUserInfoItemContainer>
      <SkeletonUserInfoItemContainer>
        <SkeletonUserInfoContainer>
          <SkeletonFollowUserInfo />
        </SkeletonUserInfoContainer>
      </SkeletonUserInfoItemContainer>
      <SkeletonUserInfoItemContainer>
        <SkeletonUserInfoContainer>
          <SkeletonFollowUserInfo />
        </SkeletonUserInfoContainer>
      </SkeletonUserInfoItemContainer>
    </>
  );
};

export default SearchFollowSkeleton;
