import { useState } from 'react';
import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';
import { EndButtonContainer } from './MeditationEndButton.style';
import { MeditationStatusType } from '@pages/meditation/types';
import { intervalId, meditationTime } from '@pages/meditation/states';
import { useRecoilState, useSetRecoilState } from 'recoil';

const MeditationEndButton = ({
  statusSetter: meditationStatusSetter
}: {
  statusSetter: React.Dispatch<React.SetStateAction<MeditationStatusType>>;
}) => {
  const [confirmCaptured, setConfirmCaptured] = useState(false);
  const setTime = useSetRecoilState(meditationTime);
  const [timerId, setTimerId] = useRecoilState(intervalId);

  const handleCancelButton = () => {
    setConfirmCaptured(false);
  };

  const handleConfirmButton = () => {
    meditationStatusSetter({ started: false, paused: true, ended: false });
    clearInterval(timerId);
    setTimerId(0);
    setTime(0);
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
