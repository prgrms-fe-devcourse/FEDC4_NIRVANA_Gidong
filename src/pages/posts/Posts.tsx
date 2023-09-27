import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import type { EditedPost } from '@/types';
import { getPosts } from '@apis/posts';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { Toast } from '@components/Toast';
import { PostPreview } from '@components/PostPreview';
import { ThemePicker } from '@components/ThemePicker';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { editPostData } from './utils/editPostData';
import useObserver from './hooks/useObserver';
import {
  PostsContainer,
  StyledPostsPage,
  ThemePickerContainer
} from './Posts.style';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';
import NoPosts from './components/NoPosts/NoPosts';

const Posts = () => {
  const locate = useLocation();
  const postsRef = useRef(null);
  const [postsData, setPostsData] = useState<EditedPost[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const [channel, setChannel] = useState<ThemeInfoType>(
    locate.state?.channelInfo
      ? locate.state.channelInfo
      : meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const channelInfo = new Map(meditationChannelInfo);

  const { data, isError } = useQuery({
    queryKey: ['getChannelPosts', channel.id, offset],
    queryFn: async () => {
      const { data } = await getPosts(channel.id, offset);
      const editedData = editPostData(data);

      return editedData;
    },
    suspense: true
  });

  useEffect(() => {
    if (data) {
      setPostsData(offset === 0 ? data : [...postsData, ...data]);
    }
  }, [data, offset, postsData]);

  useEffect(() => {
    setOffset(0);
  }, [channel.id]);

  useEffect(() => {
    if (postsRef.current && postsRef.current.childNodes.length >= 10) {
      const { lastChild } = postsRef.current;
      lastChild && observe(lastChild);
    }
  }, [postsData]);

  const clickThemePicker = (selected: ThemeInfoType) => {
    setChannel(selected);
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
      <PostsContainer ref={postsRef}>
        {postsData.length > 0 ? (
          postsData.map((post: EditedPost, index) => {
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
          })
        ) : (
          <NoPosts />
        )}
      </PostsContainer>
    </StyledPostsPage>
  );
};

export default Posts;
