import { useState, useEffect, useRef, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { EditedPost } from '@/types';
import { getPosts } from '@apis/posts';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { Toast } from '@components/Toast';
import { PostPreview } from '@components/PostPreview';
import { ThemePicker } from '@components/ThemePicker';
import { editPostData } from './utils/editPostData';
import useObserver from './hooks/useObserver';
import {
  StyledPostsPage,
  ThemePickerContainer,
  PostsContainer
} from './Posts.style';
import { useLocation } from 'react-router-dom';
import { SkeletonPosting } from '@pages/posting/components/SkeletonPosting';

const PostsMain = () => {
  const locate = useLocation();
  const postsRef = useRef(null);
  const [postsData, setPostsData] = useState<EditedPost[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const [channelId, setChannelId] = useState(
    locate.state.channelId ? locate.state.channelId : '65017a41dfe8db5726b603a7'
  );
  const channelInfo = new Map(meditationChannelInfo);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getChannelPosts', channelId, offset],
    queryFn: async () => {
      const { data } = await getPosts(channelId, offset);
      const editedData = editPostData(data);

      return editedData;
    }
  });

  useEffect(() => {
    if (data) {
      setPostsData(offset === 0 ? data : [...postsData, ...data]);
    }
  }, [data]);

  useEffect(() => {
    setOffset(0);
  }, [channelId]);

  useEffect(() => {
    if (postsRef.current && postsRef.current.childNodes.length >= 10) {
      const { lastChild } = postsRef.current;
      lastChild && observe(lastChild);
    }
  }, [postsData]);

  const clickThemePicker = (selectedId: string) => {
    setChannelId(selectedId);
  };

  return (
    <StyledPostsPage>
      <ThemePickerContainer>
        <ThemePicker
          themeInfo={channelInfo}
          handleClickTheme={clickThemePicker}
          dark={false}
        />
      </ThemePickerContainer>
      {isError && (
        <Toast
          type={'ERROR'}
          content={'포스트를 불러오는 데 실패했습니다. 다시 시도해주세요.'}
        />
      )}
      {isLoading && <SkeletonPosting />}
      {isSuccess && (
        <PostsContainer ref={postsRef}>
          {postsData.map((post: EditedPost, index) => {
            const { content, likes, comments } = post;
            return (
              content && (
                <PostPreview
                  key={index}
                  post={post}
                  totalLikes={likes.length}
                  totalComments={comments.length}
                  noneProfile={false}
                />
              )
            );
          })}
        </PostsContainer>
      )}
    </StyledPostsPage>
  );
};

export default PostsMain;
