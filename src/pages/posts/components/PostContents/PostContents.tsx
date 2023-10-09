import { useEffect, useState, useRef, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { EditedPost } from '@/types';

import { getPosts } from '@apis/posts';
import { Toast } from '@components/Toast';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { editPostData } from '@pages/posts/utils/editPostData';
import { PostPreviewList } from './index';
import { NoPosts } from '../NoPosts';
import useObserver from '@pages/posts/hooks/useObserver';

import { PostsContainer } from './PostContents.style';

interface PostItemsProps {
  channel: ThemeInfoType;
}

const PostItems = ({ channel }: PostItemsProps) => {
  const [postsData, setPostsData] = useState<EditedPost[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => {
    setOffset((curr) => {
      return curr + 10;
    });
  });
  const postsRef = useRef(null);

  const { data, isError } = useQuery({
    queryKey: ['getChannelPosts', channel.id, offset],
    queryFn: async () => {
      const { data } = await getPosts(channel.id, offset);
      const editedData = editPostData(data);

      return editedData;
    },
    suspense: true
  });

  const PostContent = useCallback(() => {
    return postsData.length > 0 ? (
      <PostPreviewList postsData={postsData} />
    ) : (
      <NoPosts />
    );
  }, [postsData]);

  useEffect(() => {
    setOffset(0);
  }, [channel.id]);

  useEffect(() => {
    if (postsRef.current && data.length >= 10) {
      const { lastChild } = postsRef.current;
      lastChild && observe(lastChild);
    }
  }, [postsData]);

  useEffect(() => {
    if (data) {
      setPostsData(offset === 0 ? data : [...postsData, ...data]);
    }
  }, [data, offset]);

  return (
    <PostsContainer ref={postsRef}>
      <PostContent />
      {isError && (
        <Toast
          type={'ERROR'}
          content={'포스트를 불러오는 데 실패했습니다. 다시 시도해주세요.'}
        />
      )}
    </PostsContainer>
  );
};

export default PostItems;
