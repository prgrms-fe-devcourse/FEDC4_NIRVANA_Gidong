import { useEffect, useState } from 'react';

import { Toast } from '@components/Toast';
import { POSTING_DESCRIPTION, POSTING_WARNING } from '@pages/posting/constants';
import { Button } from '@components/Button';
import useDebounce from '@hooks/useDebounce';
import useSessionStorage from '@hooks/useSessionStorage';
import NewPostConfirm from './NewPostConfirm';
import {
  ButtonContainer,
  PostContainer,
  StyledTextArea,
  TextAreaContainer
} from './NewPost.style';
import { UseMutateFunction } from '@tanstack/react-query';

interface MeditationInfo {
  channelId: string;
  validation: boolean;
  channelLabel: string;
  totalTime: number;
}

interface MutationParams {
  posting: string;
}

interface NewPostProps {
  meditationInfo: MeditationInfo;
  isLoading: boolean;
  mutatePosting: UseMutateFunction<void, unknown, MutationParams, unknown>;
}

const NewPost = ({
  meditationInfo,
  mutatePosting,
  isLoading
}: NewPostProps) => {
  const { PLACEHOLDER, WRITE } = POSTING_DESCRIPTION;
  const { LIMIT_LENGTH, WARNING } = POSTING_WARNING;
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
      mutatePosting({ posting });
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
      {posting.length >= LIMIT_LENGTH && (
        <Toast
          content={WARNING}
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
            disabled={isLoading}
            width={300}
            height={50}
            dark={true}
            label={WRITE}
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
