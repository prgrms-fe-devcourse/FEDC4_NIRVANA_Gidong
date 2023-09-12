import { Button } from '@components/Button';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { StyledForm, StyledInput, ButtonContainer } from './NewPost.style';

const NewPost = () => {
  const { PLACEHOLDER, UPLOAD } = POSTING_DESCRIPTION;
  return (
    <StyledForm>
      <StyledInput placeholder={PLACEHOLDER} />
      <ButtonContainer>
        <Button
          width={300}
          height={50}
          dark={true}
          label={UPLOAD}
          bold={true}
          fontSize={16}
          borderRadius={10}
        />
      </ButtonContainer>
    </StyledForm>
  );
};

export default NewPost;
