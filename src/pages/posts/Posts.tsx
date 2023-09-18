import { useState, useEffect, useCallback, useRef } from 'react';

import { StyledPostsPage } from './Posts.style';
import { PostPreview } from '@components/PostPreview';
import useObserver from './hooks/useObserver';
import { getPosts } from '@apis/posts';
import { editPostData } from './utils/editPostData';
import type { Post } from '@types/index';

const Posts = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const pageRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    const data = await getPosts('65003530a72a0d2e63f12878', offset);
    const editedData = editPostData(data.data);

    setPostsData([...postsData, ...editedData]);
  }, [offset]);

  useEffect(() => {
    fetchPosts();
  }, [offset]);

  useEffect(() => {
    if (pageRef && pageRef.current) {
      const { lastChild } = pageRef.current;
      observe(lastChild);
    }
  }, [postsData]);

  return (
    <StyledPostsPage ref={pageRef}>
      {postsData.map((post: Post, index) => (
        <PostPreview
          key={index}
          post={post}
          totalLikes={post.likes.length}
          totalComments={post.comments.length}
          noneProfile={false}
        />
      ))}
    </StyledPostsPage>
  );
};

export default Posts;
