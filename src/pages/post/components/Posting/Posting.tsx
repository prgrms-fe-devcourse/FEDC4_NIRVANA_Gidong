import NewPost from './NewPost';
import { Link } from '@components/Link';
import { LandingMain } from '@pages/landing/style';
import { POSTING_DESCRIPTION } from '@pages/post/constants';
import {
  StyledPosting,
  ContentContainer,
  StyledDescription,
  StyledPassPosting
} from './Posting.style';

const Posting = () => {
  const { HEADER, PASS_POSTING } = POSTING_DESCRIPTION;
  return (
    <LandingMain>
      <StyledPosting>
        <ContentContainer>
          <StyledDescription>{HEADER}</StyledDescription>
          <NewPost />
          <StyledPassPosting>
            <Link
              pageLink={'/'}
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
