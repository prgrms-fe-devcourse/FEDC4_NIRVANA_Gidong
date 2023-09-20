import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { createFormData, validateContent } from '@pages/posting/utils';
import { Button } from '@components/Button';
import useDebounce from '@hooks/useDebounce';
import useSessionStorage from '@hooks/useSessionStorage';
import postCreateNewPost from '@apis/posting';
import NewPostConfirm from './NewPostConfirm';
import {
  ButtonContainer,
  PostContainer,
  StyledTextArea
} from './NewPost.style';

interface MeditationInfo {
  channelId: string;
  validation: boolean;
  channelLabel: string;
  totalTime: number;
}

interface NewPostProps {
  meditationInfo: MeditationInfo;
  customToken?: string;
}

const NewPost = ({ meditationInfo, customToken }: NewPostProps) => {
  const { PLACEHOLDER, UPLOAD } = POSTING_DESCRIPTION;
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [posting, setPosting] = useState('');
  const [prevPosting, savePosting] = useSessionStorage('posting', {
    posting,
    ...meditationInfo
  });
  const clear = useDebounce(
    200,
    () => {
      savePosting({ posting, ...meditationInfo });
    },
    [posting]
  );

  const handlePostButton = () => {
    setShowConfirm(true);
  };

  const handleCancelButton = () => {
    setShowConfirm(false);
  };

  const handleConfirmButton = async () => {
    if (validateContent(posting)) {
      sessionStorage.removeItem('posting');
      const formData = createFormData(posting, meditationInfo.channelId);

      await postCreateNewPost(customToken, formData).then(() => {
        navigate('/posts');
      });
    }
  };

  useEffect(() => {
    if (prevPosting.posting) {
      setPosting(prevPosting.posting);
    }
    return () => clear();
  }, []);

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
          onChange={(event) => {
            setPosting(event.target.value);
          }}
          required
          value={posting}
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
