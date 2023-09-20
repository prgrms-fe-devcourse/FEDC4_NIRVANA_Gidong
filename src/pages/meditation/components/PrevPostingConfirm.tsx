import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';

interface PrevPostingConfirmProps {
  handleConfirmButton?: () => void;
  handleCancelButton?: () => void;
}

const PrevPostingConfirm = ({
  handleConfirmButton,
  handleCancelButton
}: PrevPostingConfirmProps) => {
  const channelId = JSON.parse(sessionStorage.getItem('posting'));
  const linkState = {
    validate: true,
    channelId: channelId
  };

  const ConfirmButton = () => {
    return (
      <Button
        width={120}
        height={50}
        label='이동'
        dark={true}
        bold={true}
        handleClick={handleConfirmButton}
      />
    );
  };

  const CancelButton = () => {
    return (
      <Button
        width={120}
        height={50}
        label='취소'
        dark={false}
        bold={true}
        handleClick={handleCancelButton}
      />
    );
  };

  return (
    <>
      <Confirm
        emoji={'✏️'}
        content={`
        작성하던 포스트가 있어요.
        포스팅 화면으로 이동할까요?
      `}
        ConfirmButton={ConfirmButton}
        CancelButton={CancelButton}
        nextPageLink='/posting'
        linkState={linkState}
      />
      ;
    </>
  );
};

export default PrevPostingConfirm;
