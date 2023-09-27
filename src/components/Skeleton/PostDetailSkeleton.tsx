import {
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonLongRectangle
} from './Skeleton.style';
import {
  PostDetailSkeletonCommentContainer,
  PostDetailSkeletonContainer,
  PostDetailSkeletonContentContainer
} from './postDetailSkeleton.style';

const PostDetailSkeleton = () => {
  return (
    <PostDetailSkeletonContainer>
      <PostDetailSkeletonContentContainer>
        <SkeletonHeader>
          <SkeletonAvatar />
          <SkeletonUser />
        </SkeletonHeader>
      </PostDetailSkeletonContentContainer>
      <SkeletonLongRectangle />
      <PostDetailSkeletonCommentContainer>
        <SkeletonHeader>
          <SkeletonAvatar />
          <SkeletonUser />
        </SkeletonHeader>
        <SkeletonHeader>
          <SkeletonAvatar />
          <SkeletonUser />
        </SkeletonHeader>
        <SkeletonHeader>
          <SkeletonAvatar />
          <SkeletonUser />
        </SkeletonHeader>
      </PostDetailSkeletonCommentContainer>
    </PostDetailSkeletonContainer>
  );
};

export default PostDetailSkeleton;
