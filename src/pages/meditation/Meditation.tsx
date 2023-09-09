import MeditationTimer from '@pages/meditation/components/MeditationTimer';
import MeditationCounter from '@pages/meditation/components/MeditaionCounter';
import MeditationLabel from '@pages/meditation/components/MeditationLabel';
import { Container } from '@pages/meditation/Meditation.style';

export const Meditation = () => {
  return (
    <>
      <Container>
        <MeditationLabel />
        <MeditationTimer />
        <MeditationCounter />
      </Container>
    </>
  );
};
