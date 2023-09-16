import { Button } from '@components/Button';
import { Confirm } from '@components/Confirm';
import { useState } from 'react';

interface PostingConfirmProps {
  handleConfirmButton: () => Promise<void>;
}

const PostingConfirm = ({ handleConfirmButton }: PostingConfirmProps) => {
  const [showConfirm, setShowConfirm] = useState(true);

  const CancleButton = () => {
    return (
      <Button
        width={120}
        height={50}
        bold={true}
        dark={false}
        label={'취소'}
        handleClick={() => setShowConfirm(false)}
      />
    );
  };

  const ConfirmButton = () => {
    return (
      <Button
        width={120}
        height={50}
        bold={true}
        dark={true}
        label={'발행'}
        handleClick={handleConfirmButton}
      />
    );
  };

  return (
    <>
      {showConfirm && (
        <Confirm
          emoji='✏️'
          content='포스트를 발행할까요?'
          CancelButton={<CancleButton />}
          ConfirmButton={<ConfirmButton />}
        />
      )}
    </>
  );
};

export default PostingConfirm;
