import { useState } from 'react';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { meditationChannelInfo } from './models/channelInfo';
import {
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter,
  PrevPostingConfirm
} from '@pages/meditation/components';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';
import MeditationAudioPlayer from '@pages/meditation/components/MeditationAudioPlayer';

const Meditation = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const [status, setStatus] = useState({
    started: false,
    paused: true,
    ended: false
  });
  const prevPosting = JSON.parse(sessionStorage.getItem('posting'));

  const handleCancelPrevPosting = () => {
    sessionStorage.removeItem('posting');
  };

  const handleThemeInfo = (selected: ThemeInfoType) => {
    setSelectedTheme(selected);
  };

  return (
    <>
      <MeditationPage meditationStatus={status}>
        {prevPosting && (
          <PrevPostingConfirm
            prevPostingInfo={prevPosting}
            handleCancelButton={handleCancelPrevPosting}
          />
        )}
        <MeditationLabel meditationStatus={status} />
        <MeditationTimer
          meditationStatus={status}
          statusSetter={setStatus}
        />
        {status.started && <MeditationAudioPlayer />}
        <MeditationTimeSetter
          meditationStatus={status}
          themePicked={selectedTheme}
        />
        {!status.started && (
          <ThemePicker
            themeInfo={meditationChannelInfo}
            handleClickTheme={handleThemeInfo}
          />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
