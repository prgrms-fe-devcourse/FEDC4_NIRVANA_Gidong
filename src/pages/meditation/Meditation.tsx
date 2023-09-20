import { useRecoilState } from 'recoil';
import { useState } from 'react';

import { endButtonPushed } from './states';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { meditationChannelInfo } from './models/channelInfo';
import {
  PrevPostingConfirm,
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter,
  MeditationCancelConfirm
} from '@pages/meditation/components';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  const [hasPrevPosting, setHasPrevPosting] = useState(
    !!sessionStorage.getItem('posting')
  );
  const handleCancelPrevPosting = () => {
    sessionStorage.removeItem('posting');
    setHasPrevPosting(false);
  };

  const handleCancelCapture = () => {
    setConfirmCaptured(false);
  };

  return (
    <>
      <MeditationPage>
        {hasPrevPosting && (
          <PrevPostingConfirm handleCancelButton={handleCancelPrevPosting} />
        )}
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        <ThemePicker themeInfo={meditationChannelInfo} />
        {confirmCaptured && (
          <MeditationCancelConfirm handleCancelButton={handleCancelCapture} />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
