import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Toast } from '@components/Toast';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { createFormData, purifyContent } from '@pages/posting/utils';
import { Button } from '@components/Button';
import useDebounce from '@hooks/useDebounce';
import useSessionStorage from '@hooks/useSessionStorage';
import postCreateNewPost from '@apis/posting';
import NewPostConfirm from './NewPostConfirm';
import {
  TextAreaContainer,
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
  customToken: string;
}

const NewPost = ({ meditationInfo, customToken }: NewPostProps) => {
  const navigate = useNavigate();
  const { PLACEHOLDER, UPLOAD } = POSTING_DESCRIPTION;
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

  const handleConfirmButton = () => {
    if (posting.length > 0) {
      sessionStorage.removeItem('posting');
      const customTitle = {
        title: purifyContent(posting),
        meditationTime: `${meditationInfo.totalTime / 60}`
      };
      const formData = createFormData(
        JSON.stringify(customTitle),
        meditationInfo.channelId
      );

      postCreateNewPost(customToken, formData).then(() => {
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
      {posting.length >= 500 && (
        <Toast
          content='포스팅은 최대 500글자까지 가능합니다.'
          type='WARNING'
        />
      )}
      {showConfirm && (
        <NewPostConfirm
          handleConfirmButton={handleConfirmButton}
          handleCancelButton={handleCancelButton}
        />
      )}
      <PostContainer>
        <TextAreaContainer>
          <StyledTextArea
            onChange={(event) => {
              setPosting(event.target.value);
            }}
            required
            value={posting}
            maxLength={500}
            placeholder={PLACEHOLDER}
          />
        </TextAreaContainer>
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
