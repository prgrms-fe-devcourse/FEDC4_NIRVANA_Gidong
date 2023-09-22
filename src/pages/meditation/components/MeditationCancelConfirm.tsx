import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';

interface MeditationCancelConfirmProps {
  handleConfirmButton?: () => void;
  handleCancelButton?: () => void;
}

const MeditationCancelConfirm = ({
  handleConfirmButton,
  handleCancelButton
}: MeditationCancelConfirmProps) => {
  return (
    <Confirm
      emoji={'🧘🏻'}
      content={'정말 명상을 끝내시겠어요?'}
      contentFontSize={18}
      nextPageLink={'/'}
      CancelButton={
        <Button
          width={120}
          height={50}
          bold={true}
          dark={false}
          label={'취소'}
          handleClick={handleCancelButton}
        />
      }
      ConfirmButton={
        <Button
          width={120}
          height={50}
          bold={true}
          dark={true}
          label={'끝내기'}
          handleClick={handleConfirmButton}
        />
      }
    />
  );
};

export default MeditationCancelConfirm;
