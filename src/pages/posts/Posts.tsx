import React, { Suspense } from 'react';

import { SkeletonPosting } from '@pages/posting/components/SkeletonPosting';
const PostsPage = React.lazy(() => import('./PostsMain'));

const Posts = () => {
  return (
    <Suspense fallback={SkeletonPosting()}>
      <PostsPage />
    </Suspense>
  );
};

export default Posts;
