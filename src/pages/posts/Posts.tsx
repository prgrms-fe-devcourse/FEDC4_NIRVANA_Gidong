import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { EditedPost } from '@/types';
import { getPosts } from '@apis/posts';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { PostPreview } from '@components/PostPreview';
import { ThemePicker } from '@components/ThemePicker';
import { editPostData } from './utils/editPostData';
import useObserver from './hooks/useObserver';
import {
  StyledPostsPage,
  ThemePickerContainer,
  PostsContainer
} from './Posts.style';

const Posts = () => {
  const postsRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const [channelId, setChannelId] = useState('65017a41dfe8db5726b603a7');
  const channelInfo = new Map(meditationChannelInfo);

  const { data: postsData } = useQuery({
    queryKey: ['getChannelPosts', channelId, offset],
    queryFn: async () => {
      const data = await getPosts(channelId, offset);
      const editedData = editPostData(data);
      const returnedData: EditedPost[] =
        offset === 0 ? editedData : [...postsData, ...editedData];

      return returnedData;
    }
  });

  useEffect(() => {
    setOffset(0);
  }, [channelId]);

  useEffect(() => {
    if (
      postsRef &&
      postsRef.current &&
      postsRef.current.childNodes.length >= 10
    ) {
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
      <PostsContainer ref={postsRef}>
        {postsData &&
          postsData.map(
            (post: EditedPost, index) =>
              post.content && (
                <PostPreview
                  key={index}
                  post={post}
                  totalLikes={post.likes.length}
                  totalComments={post.comments.length}
                  noneProfile={false}
                />
              )
          )}
      </PostsContainer>
    </StyledPostsPage>
  );
};

export default Posts;
