import { useLocation } from 'react-router-dom';

import { NewPost } from './components';
import { Link } from '@components/Link';
import { LandingMain } from '@pages/landing/style';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import {
  StyledPosting,
  ContentContainer,
  StyledDescription,
  StyledPassPosting
} from './Posting.style';

const Posting = () => {
  const location = useLocation();
  const channelId = location.state.channelId;
  const { HEADER, PASS_POSTING } = POSTING_DESCRIPTION;

  return (
    <LandingMain>
      <StyledPosting>
        <ContentContainer>
          <StyledDescription>{HEADER}</StyledDescription>
          <NewPost channelId={channelId} />
          <StyledPassPosting>
            <Link
              pageLink={'/posts'}
              size={14}
              color={'white'}>
              {PASS_POSTING}
            </Link>
          </StyledPassPosting>
        </ContentContainer>
      </StyledPosting>
    </LandingMain>
  );
};

export default Posting;
