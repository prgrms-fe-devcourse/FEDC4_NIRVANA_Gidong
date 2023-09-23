import {
  SkeletonContainer,
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonContentContainer,
  SkeletonContent
} from './PostPreviewSkeleton.style';

const Skeleton = () => {
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

export default Skeleton;
