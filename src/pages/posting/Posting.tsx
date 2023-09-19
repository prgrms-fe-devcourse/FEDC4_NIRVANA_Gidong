import { useLocation } from 'react-router-dom';

import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import { LandingMain } from '@pages/landing/Landing.style';
import {
  StyledPosting,
  ContentContainer,
  StyledDescription
} from './Posting.style';

const Posting = () => {
  const location = useLocation();
  const { channelId, channelLabel, totalTime } = location.state;

  const { _, token } = JSON.parse(sessionStorage.getItem('userData'));
  const customToken = `bearer ${token}`;

  return (
    <LandingMain>
      <StyledPosting>
        <ContentContainer>
          <StyledDescription>
            <p>
              총 <b>{totalTime / 60}</b>분동안 명상을 진행했어요!
            </p>
            <p>{channelLabel}에 대해 어떤 생각을 하셨나요?</p>
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
    </LandingMain>
  );
};

export default Posting;
