import { Button } from '@components/Button';
import { StyledForm, StyledInput, ButtonContainer } from './NewPost.style';

const NewPost = () => {
  return(
    <StyledForm>
      <StyledInput placeholder='명상을 통해 얻은 생각과 느낌을 기록해보세요.'/>
      <ButtonContainer>
        <Button width={300} height={50} dark={true} label={'업로드'} bold={true} fontSize={16} borderRadius={10} />
      </ButtonContainer>
    </StyledForm>
  )
}

export default NewPost;