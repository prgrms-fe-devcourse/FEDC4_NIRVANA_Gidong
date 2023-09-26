import { useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';

import { POSTING_DESCRIPTION } from '@pages/posting/constants';
import { StyledSkipPosting } from './SkipPosting.style';
import SkipPostingConfirm from './SkipPostingConfirm';

interface MutationParams {
  posting: string;
}

interface SkipPostingProps {
  mutatePosting: UseMutateFunction<void, unknown, MutationParams, unknown>;
}

const SkipPosting = ({ mutatePosting }: SkipPostingProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { SKIP_POSTING } = POSTING_DESCRIPTION;

  const handleClickSkipPost = () => {
    setShowConfirm(true);
  };

  const handleCancelButton = () => {
    setShowConfirm(false);
  };

  const handleConfirmButton = () => {
    setShowConfirm(false);
    mutatePosting({ posting: '' });
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
