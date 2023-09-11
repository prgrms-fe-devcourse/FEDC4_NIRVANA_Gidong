import MeditationTimer from '@pages/meditation/components/MeditationTimer';
import MeditationCounter from '@pages/meditation/components/MeditaionCounter';
import MeditationLabel from '@pages/meditation/components/MeditationLabel';
import { Container } from '@pages/meditation/Meditation.style';
import Confirm from '@components/Confirm';
import { useRecoilValue } from 'recoil';
import { endButtonPushed } from '@pages/meditation/components/MeditationEndButton';

export const Meditation = () => {
  const confirmCaptured = useRecoilValue(endButtonPushed);
  return (
    <>
      <Container>
        <MeditationLabel />
        <MeditationTimer />
        <MeditationCounter />
        {confirmCaptured && (
          <Confirm
            width={329}
            height={389}
            emoji={'🧘🏻'}
            emojiSize={4.5}
            content={'정말 명상을 끝내시겠어요?'}
            contentFontSize={1.2}
            nextPageLink={'/'}
          />
        )}
      </Container>
    </>
  );
};
