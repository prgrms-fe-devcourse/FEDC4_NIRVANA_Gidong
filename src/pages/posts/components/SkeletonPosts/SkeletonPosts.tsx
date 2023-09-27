import { PostPreviewSkeleton } from '@/components/Skeleton';
import { SkeletonPostingPage } from './SkeletonPosts.style';

const SkeletonPosting = () => {
  return (
    <SkeletonPostingPage>
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
    </SkeletonPostingPage>
  );
};

export default SkeletonPosting;
