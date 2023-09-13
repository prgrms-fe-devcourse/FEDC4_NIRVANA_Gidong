import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postCreateNewPost from '@apis/posting';
import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { makeFormData } from '../utils';
import { StyledPassPosting } from './PassPosting.style';

interface PassPostingProps {
  channelId: string;
  customToken: string;
}

const PassPosting = ({ channelId, customToken }: PassPostingProps) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const { PASS_POSTING } = POSTING_DESCRIPTION;

  const handleClickPassPost = () => {
    const formData = makeFormData('', channelId);
    postCreateNewPost(customToken, formData);
    navigate('/posts');
  };

  return (
    <>
      <StyledPassPosting onClick={handleClickPassPost}>
        {PASS_POSTING}
      </StyledPassPosting>
    </>
  );
};

export default PassPosting;
