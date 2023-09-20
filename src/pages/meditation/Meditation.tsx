import { useRecoilState } from 'recoil';
import { useState } from 'react';

import { endButtonPushed } from './states';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';
import { meditationChannelInfo } from './models/channelInfo';
import {
  PrevPostingConfirm,
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter
} from '@pages/meditation/components';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  const [hasPrevPosting, setHasPrevPosting] = useState(
    !!sessionStorage.getItem('posting')
  );
  const handleCancelButton = () => {
    sessionStorage.removeItem('posting');
    setHasPrevPosting(false);
  };

  return (
    <>
      <MeditationPage>
        {hasPrevPosting && (
          <PrevPostingConfirm handleCancelButton={handleCancelButton} />
        )}
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        <ThemePicker themeInfo={meditationChannelInfo} />
        {confirmCaptured && (
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
                handleClick={() => setConfirmCaptured(false)}
              />
            }
            ConfirmButton={
              <Button
                width={120}
                height={50}
                bold={true}
                dark={true}
                label={'끝내기'}
              />
            }
          />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
