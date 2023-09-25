import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { createFormData } from '@pages/posting/utils';
import { StyledSkipPosting } from './SkipPosting.style';
import postCreateNewPost from '@apis/posting';
import SkipPostingConfirm from './SkipPostingConfirm';

interface MeditationInfo {
  channelId: string;
  validation: boolean;
  channelLabel: string;
  totalTime: number;
}

interface SkipPostingProps {
  meditationInfo: MeditationInfo;
  customToken?: string;
}

const SkipPosting = ({ meditationInfo, customToken }: SkipPostingProps) => {
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
    const customTitle = {
      title: '',
      meditationTime: `${meditationInfo.totalTime / 60}`
    };
    const formData = createFormData(
      JSON.stringify(customTitle),
      meditationInfo.channelId
    );

    await postCreateNewPost(customToken, formData).then(() => {
      setShowConfirm(false);
      sessionStorage.removeItem('posting');
      navigate('/posts', { state: { channelId: meditationInfo.channelId } });
    });
  };

  return (
    <>
      {showConfirm && (
        <SkipPostingConfirm
          handleConfirmButton={handleConfirmButton}
          handleCancelButton={handleCancelButton}
        />
      )}
      <StyledSkipPosting onClick={handleClickSkipPost}>
        {SKIP_POSTING}
      </StyledSkipPosting>
    </>
  );
};

export default SkipPosting;
