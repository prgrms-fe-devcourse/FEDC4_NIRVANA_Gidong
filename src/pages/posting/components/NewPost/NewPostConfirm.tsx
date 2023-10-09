import { Button } from '@components/Button';
import { Confirm } from '@components/Confirm';

interface NewPostConfirmProps {
  isLoading: boolean;
  handleConfirmButton: (() => Promise<void>) | (() => void);
  handleCancelButton: () => void;
}

const NewPostConfirm = ({
  isLoading,
  handleConfirmButton,
  handleCancelButton
}: NewPostConfirmProps) => {
  const CancleButton = () => {
    return (
      <Button
        width={120}
        height={50}
        bold={true}
        dark={false}
        label={'취소'}
        handleClick={() => handleCancelButton()}
      />
    );
  };

  const ConfirmButton = () => {
    return (
      <Button
        disabled={isLoading}
        width={120}
        height={50}
        bold={true}
        dark={true}
        label={'발행'}
        handleClick={() => handleConfirmButton()}
      />
    );
  };

  return (
    <Confirm
      emoji='✏️'
      content='포스트를 발행할까요?'
      CancelButton={<CancleButton />}
      ConfirmButton={<ConfirmButton />}
    />
  );
};

export default NewPostConfirm;
