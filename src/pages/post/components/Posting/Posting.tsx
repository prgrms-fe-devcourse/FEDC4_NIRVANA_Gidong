import NewPost from './NewPost';
import { LandingMain } from '@pages/landing/style';
import {
  StyledPosting,
  ContentContainer,
  StyledDescription,
  StyledPassPosting
} from './Posting.style';

const Posting = () => {
  return (
    <LandingMain>
      <StyledPosting>
        <ContentContainer>
          <StyledDescription></StyledDescription>
          <NewPost />
          <StyledPassPosting></StyledPassPosting>
        </ContentContainer>
      </StyledPosting>
    </LandingMain>
  );
};

export default Posting;
