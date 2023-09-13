import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import postCreateNewPost from '@apis/posting';
import { Button } from '@components/Button';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { PostContainer, StyledTextArea, ButtonContainer } from './NewPost.style';
import { createFormData, validateContent } from '../utils';

interface NewPostProps {
  channelId: string;
  customToken: string;
}

const NewPost = ({ channelId, customToken }: NewPostProps) => {
  const contentRef = useRef(null);
  const { PLACEHOLDER, UPLOAD } = POSTING_DESCRIPTION;
  const navigate = useNavigate();
  
  const handleClickButton = async() => {
    if (validateContent(contentRef.current.value)) {
      const formData = createFormData(contentRef.current.value, channelId);
      
      await postCreateNewPost(customToken, formData).then(() => {
        navigate('/posts')
      });
    }
  }

  return (
    <PostContainer>
      <StyledTextArea ref={contentRef} required maxLength={500} placeholder={PLACEHOLDER} />
      <ButtonContainer>
        <Button
          width={300}
          height={50}
          dark={true}
          label={UPLOAD}
          bold={true}
          fontSize={16}
          borderRadius={10}
          handleClick={handleClickButton}
        />
      </ButtonContainer>
    </PostContainer>
  );
};

export default NewPost;
