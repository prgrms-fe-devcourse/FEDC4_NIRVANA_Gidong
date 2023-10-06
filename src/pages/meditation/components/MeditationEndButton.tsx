import { useState } from 'react';
import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';
import { EndButtonContainer } from './MeditationEndButton.style';

const MeditationEndButton = () => {
  const [confirmCaptured, setConfirmCaptured] = useState(false);

  const handleCancelButton = () => {
    setConfirmCaptured(false);
  };

  const handleConfirmButton = () => {
    location.reload(); // 리팩토링 전 임시방편
  };
  return (
    <>
      <EndButtonContainer>
        <Button
          width={129}
          height={49}
          dark={true}
          bold={false}
          label={'명상 끝내기'}
          handleClick={() => {
            setConfirmCaptured(true);
          }}
        />
      </EndButtonContainer>
      {confirmCaptured && (
        <Confirm
          emoji={'🧘🏻'}
          content={'정말 명상을 끝내시겠어요?'}
          contentFontSize={18}
          nextPageLink={'/meditation'}
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
      )}
    </>
  );
};

export default MeditationEndButton;
