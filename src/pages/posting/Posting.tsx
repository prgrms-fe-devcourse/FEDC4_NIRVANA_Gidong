import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userState } from '@/states/userState';
import { NewPost, PassPosting } from './components';
import { LandingMain } from '@pages/landing/Landing.style';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import {
  StyledPosting,
  ContentContainer,
  StyledDescription
} from './Posting.style';

const Posting = () => {
  const location = useLocation();
  const channelId = location.state.channelId;

  const { token } = useRecoilValue(userState);
  const customToken = `bearer ${token}`;

  const { HEADER } = POSTING_DESCRIPTION;

  return (
    <LandingMain>
      <StyledPosting>
        <ContentContainer>
          <StyledDescription>{HEADER}</StyledDescription>
          <NewPost
            channelId={channelId}
            customToken={customToken}
          />
          <PassPosting
            channelId={channelId}
            customToken={customToken}
          />
        </ContentContainer>
      </StyledPosting>
    </LandingMain>
  );
};

export default Posting;
