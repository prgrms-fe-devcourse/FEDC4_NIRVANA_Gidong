import { useLocation, useNavigate } from 'react-router-dom';

import { NewPost } from './components/NewPost';
import { SkipPosting } from './components/SkipPosting';
import {
  ContentContainer,
  StyledDescription,
  StyledPosting
} from './Posting.style';
import { useEffect } from 'react';

const Posting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { channelId, validate, channelLabel, totalTime } = location.state;

  const { token } = JSON.parse(sessionStorage.getItem('userData'));
  const customToken = `bearer ${token}`;

  useEffect(() => {
    if (!validate) {
      navigate('/404');
    }
  });

  return (
    <StyledPosting>
      <ContentContainer>
        <StyledDescription>
          <p>
            총 <b>{totalTime / 60}</b>분 동안 명상을 진행했어요!
          </p>
          <p>
            <u>{channelLabel}</u>에 대해 어떤 생각을 하셨나요?
          </p>
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
