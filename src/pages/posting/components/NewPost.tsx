import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postCreateNewPost from '@apis/posting';
import { NewPostConfirm } from '@pages/posting/components';
import { Button } from '@components/Button';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import {
  PostContainer,
  StyledTextArea,
  ButtonContainer
} from './NewPost.style';
import { createFormData, validateContent } from '../utils';

interface NewPostProps {
  channelId?: string;
  customToken?: string;
}

const NewPost = ({ channelId, customToken }: NewPostProps) => {
  const contentRef = useRef(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const { PLACEHOLDER, UPLOAD } = POSTING_DESCRIPTION;
  const navigate = useNavigate();

  const handlePostButton = () => {
    setShowConfirm(true);
  };

  const handleCancelButton = () => {
    setShowConfirm(false);
  };

  const handleConfirmButton = async () => {
    if (validateContent(contentRef.current.value)) {
      const formData = createFormData(contentRef.current.value, channelId);

      await postCreateNewPost(customToken, formData).then(() => {
        navigate('/posts');
      });
    }
  };

  return (
    <>
      {showConfirm && (
        <NewPostConfirm
          handleConfirmButton={handleConfirmButton}
          handleCancelButton={handleCancelButton}
        />
      )}
      <PostContainer>
        <StyledTextArea
          ref={contentRef}
          required
          maxLength={500}
          placeholder={PLACEHOLDER}
        />
        <ButtonContainer>
          <Button
            width={300}
            height={50}
            dark={true}
            label={UPLOAD}
            bold={true}
            fontSize={16}
            borderRadius={10}
            handleClick={handlePostButton}
          />
        </ButtonContainer>
      </PostContainer>
    </>
  );
};

export default NewPost;
