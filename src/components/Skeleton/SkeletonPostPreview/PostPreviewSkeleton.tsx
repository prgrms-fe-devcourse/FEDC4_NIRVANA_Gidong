import {
  SkeletonAvatar,
  SkeletonContainer,
  SkeletonContent,
  SkeletonContentContainer,
  SkeletonHeader,
  SkeletonUser
} from './PostPreviewSkeleton.style';

const PostPreviewSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonHeader>
        <SkeletonAvatar />
        <SkeletonUser />
      </SkeletonHeader>

      <SkeletonContentContainer>
        <SkeletonContent />
        <SkeletonContent />
      </SkeletonContentContainer>
    </SkeletonContainer>
  );
};

export default PostPreviewSkeleton;
