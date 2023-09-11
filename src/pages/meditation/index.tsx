import styled from '@emotion/styled';
import MeditationTimer from '@pages/meditation/components/MeditationTimer';
import MeditationCounter from '@pages/meditation/components/MeditaionCounter';
import MeditationLabel from '@pages/meditation/components/MeditationLabel';

const Container = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;
const Meditation = () => {
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

export default Meditation;
