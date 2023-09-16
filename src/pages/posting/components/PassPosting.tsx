import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postCreateNewPost from '@apis/posting';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { PassPostingConfirm } from '@pages/posting/components';
import { createFormData } from '../utils';
import { StyledPassPosting } from './PassPosting.style';

interface PassPostingProps {
  channelId?: string;
  customToken?: string;
}

const PassPosting = ({ channelId, customToken }: PassPostingProps) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const { PASS_POSTING } = POSTING_DESCRIPTION;

  const handleClickPassPost = () => {
    setShowConfirm(true);
  };

  const handleCancelButton = () => {
    setShowConfirm(false);
  };

  const handleConfirmButton = async () => {
    const formData = createFormData('', channelId);
    await postCreateNewPost(customToken, formData).then(() => {
      navigate('/posts');
    });
  };

  return (
    <>
      {showConfirm && <PassPostingConfirm handleConfirmButton={handleConfirmButton} handleCancelButton={handleCancelButton}/>}
      <StyledPassPosting onClick={handleClickPassPost}>
        {PASS_POSTING}
      </StyledPassPosting>
    </>
  );
};

export default PassPosting;
