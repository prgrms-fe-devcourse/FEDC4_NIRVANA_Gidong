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
import useSessionStorage from '@hooks/useSessionStorage';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  const [prevPosting, _] = useSessionStorage('posting', {
    posting: '',
    channelId: null
  });
  const linkState = {
    validate: true,
    channelId: prevPosting.channelId
  };

  const handleCancelPrevPosting = () => {
    sessionStorage.removeItem('posting');
  };

  const handleCancelCapture = () => {
    setConfirmCaptured(false);
  };

  return (
    <>
      <MeditationPage>
        {!!prevPosting.channelId && (
          <PrevPostingConfirm
            linkState={linkState}
            handleCancelButton={handleCancelPrevPosting}
          />
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
