import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/Button';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { createFormData, purifyContent } from '@pages/posting/utils';
import postCreateNewPost from '@apis/posting';
import NewPostConfirm from './NewPostConfirm';
import {
  ButtonContainer,
  PostContainer,
  StyledTextArea
} from './NewPost.style';

interface NewPostProps {
  channelId?: string;
  meditationTime?: number;
  customToken?: string;
}

const NewPost = ({ channelId, meditationTime, customToken }: NewPostProps) => {
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

  const handleConfirmButton = () => {
    const content: string = contentRef.current.value;
    if (content.length > 0) {
      const customTitle = {
        title: purifyContent(content),
        meditationTime: `${meditationTime / 60}`
      };
      const formData = createFormData(JSON.stringify(customTitle), channelId);

      postCreateNewPost(customToken, formData)
        .then((res) => {
          console.log(res);
          navigate('/posts');
        })
        .catch(() => {
          console.error('포스트 생성에 실패했습니다.');
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
