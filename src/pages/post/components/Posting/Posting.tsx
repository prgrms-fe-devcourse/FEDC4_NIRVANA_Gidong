import NewPost from './NewPost';
import {
  StyledBackground,
  ContentContainer,
  StyledDescription,
  StyledPassPosting
} from './Posting.style';

const Posting = () => {
  return (
    <StyledBackground>
      <ContentContainer>
        <StyledDescription></StyledDescription>
        <NewPost />
        <StyledPassPosting></StyledPassPosting>
      </ContentContainer>
    </StyledBackground>
  );
};

export default Posting;
