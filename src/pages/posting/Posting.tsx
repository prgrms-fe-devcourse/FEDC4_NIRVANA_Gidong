import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import {
  ContentContainer,
  StyledDescription,
  StyledPosting
} from './Posting.style';
import PostingHelper from './components/NewPost/PostingHelper';

interface ReceiveState {
  totalTime: number;
  channelId: string;
  channelLabel: string;
}

const Posting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = JSON.parse(sessionStorage.getItem('userData'));
  const [meditationInfo, setMeditationInfo] = useState<ReceiveState>({
    totalTime: 0,
    channelId: '',
    channelLabel: ''
  });
  const { totalTime, channelLabel, channelId } = meditationInfo;
  const customToken = `bearer ${token}`;

  useEffect(() => {
    if (location.state === null) {
      navigate('/404');
    }

    setMeditationInfo(location.state);
  }, []);

  return (
    <StyledPosting>
      <ContentContainer>
        <StyledDescription>
          <PostingHelper
            totalTime={totalTime}
            channelLabel={channelLabel}
          />
        </StyledDescription>
        <NewPost
          channelId={channelId}
          customToken={customToken}
        />
        <SkipPosting
          channelId={channelId}
          customToken={customToken}
        />
      </ContentContainer>
    </StyledPosting>
  );
};

export default Posting;
