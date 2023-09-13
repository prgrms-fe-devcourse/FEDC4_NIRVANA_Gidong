import { useRecoilValue } from 'recoil';
import MeditationLabel from '@pages/meditation/components/MeditationLabel';
import MeditationTimer from '@pages/meditation/components/MeditationTimer';
import MeditationTimeSetter from '@pages/meditation/components/MeditationTimeSetter';
import { MeditationPage } from './Meditation.style';
import { endButtonPushed } from '@pages/meditation/components/MeditationEndButton/MeditationEndButton';
import { Confirm } from '@components/Confirm';

export const Meditation = () => {
  const confirmCaptured = useRecoilValue(endButtonPushed);
  return (
    <>
      <MeditationPage>
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        {confirmCaptured && (
          <Confirm
            width={329}
            height={389}
            emoji={'🧘🏻'}
            emojiSize={70}
            content={'정말 명상을 끝내시겠어요?'}
            contentFontSize={18}
            nextPageLink={'/'}
          />
        )}
      </MeditationPage>
    </>
  );
};
