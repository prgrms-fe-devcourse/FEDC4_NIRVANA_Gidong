import { PostPreviewSkeleton } from '../index';
import { SkeletonPostsPage } from './SkeletonPosts.style';

const SkeletonPosts = () => {
  return (
    <SkeletonPostsPage>
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
      <PostPreviewSkeleton />
    </SkeletonPostsPage>
  );
};

export default SkeletonPosts;
