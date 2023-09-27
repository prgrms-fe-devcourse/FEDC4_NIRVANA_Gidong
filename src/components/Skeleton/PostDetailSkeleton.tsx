import {
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonContent,
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
        <SkeletonContent />
        <SkeletonContent />
      </PostDetailSkeletonCommentContainer>
    </PostDetailSkeletonContainer>
  );
};

export default PostDetailSkeleton;
