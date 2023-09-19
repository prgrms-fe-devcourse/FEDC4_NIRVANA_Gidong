import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { createFormData } from '@pages/posting/utils';
import { StyledSkipPosting } from './SkipPosting.style';
import postCreateNewPost from '@apis/posting';
import SkipPostingConfirm from './SkipPostingConfirm';

interface SkipPostingProps {
  channelId?: string;
  customToken?: string;
}

const SkipPosting = ({ channelId, customToken }: SkipPostingProps) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const { SKIP_POSTING } = POSTING_DESCRIPTION;

  const handleClickSkipPost = () => {
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
      {showConfirm && <SkipPostingConfirm handleConfirmButton={handleConfirmButton} handleCancelButton={handleCancelButton}/>}
      <StyledSkipPosting onClick={handleClickSkipPost}>
        {SKIP_POSTING}
      </StyledSkipPosting>
    </>
  );
};

export default SkipPosting;
