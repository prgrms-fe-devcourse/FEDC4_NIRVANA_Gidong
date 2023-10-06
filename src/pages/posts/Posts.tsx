import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';

import { PostContents } from './components/PostContents';
import { ThemePicker } from '@components/ThemePicker';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { StyledPostsPage, ThemePickerContainer } from './Posts.style';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';

const Posts = () => {
  const locate = useLocation();
  const [channel, setChannel] = useState<ThemeInfoType>(
    locate.state?.channelInfo
      ? locate.state.channelInfo
      : meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const channelInfo = new Map(meditationChannelInfo);

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
      <PostContents channel={channel} />
    </StyledPostsPage>
  );
};

export default Posts;
