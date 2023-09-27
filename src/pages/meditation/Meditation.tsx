import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { endButtonPushed } from './states';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { meditationChannelInfo } from './models/channelInfo';
import {
  MeditationCancelConfirm,
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter,
  PrevPostingConfirm
} from '@pages/meditation/components';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  const [selectedTheme, setSelectedTheme] = useState(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const prevPosting = JSON.parse(sessionStorage.getItem('posting'));

  const handleCancelPrevPosting = () => {
    sessionStorage.removeItem('posting');
  };

  const handleCancelCapture = () => {
    setConfirmCaptured(false);
  };

  const handleMeditationCancel = () => {
    location.reload(); // 리팩토링 전 임시방편
  };

  const handleThemeInfo = (selected: ThemeInfoType) => {
    setSelectedTheme(selected);
  };

  return (
    <>
      <MeditationPage>
        {prevPosting && (
          <PrevPostingConfirm
            prevPostingInfo={prevPosting}
            handleCancelButton={handleCancelPrevPosting}
          />
        )}
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter
          id={selectedTheme.id}
          label={selectedTheme.label}
        />
        <ThemePicker
          themeInfo={meditationChannelInfo}
          handleClickTheme={handleThemeInfo}
        />
        {confirmCaptured && (
          <MeditationCancelConfirm
            handleConfirmButton={handleMeditationCancel}
            handleCancelButton={handleCancelCapture}
          />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
