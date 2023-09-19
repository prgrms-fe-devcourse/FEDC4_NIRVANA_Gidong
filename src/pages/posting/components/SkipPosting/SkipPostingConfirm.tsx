import { Button } from '@components/Button';
import { Confirm } from '@components/Confirm';

interface PostingPassConfirmProps {
  handleConfirmButton: (() => Promise<void>) | (() => void);
  handleCancelButton: () => void;
}

const SkipPostingConfirm = ({
  handleConfirmButton,
  handleCancelButton
}: PostingPassConfirmProps) => {
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
        width={120}
        height={50}
        bold={true}
        dark={true}
        label={'건너뛰기'}
        handleClick={() => handleConfirmButton()}
      />
    );
  };

  return (
    <Confirm
      emoji='❗️'
      content='포스트 작성을 건너뛸까요?'
      CancelButton={<CancleButton />}
      ConfirmButton={<ConfirmButton />}
    />
  );
};

export default SkipPostingConfirm;
