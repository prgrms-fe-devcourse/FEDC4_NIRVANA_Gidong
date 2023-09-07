import styled from '@emotion/styled';
import MeditationTimer from '@pages/meditation/components/MeditationTimer';
import MeditationCounter from '@pages/meditation/components/MeditaionCounter';
import MeditationLabel from '@pages/meditation/components/MeditationLabel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 758px;
  width: 390px;
  background: ${({ theme }) => theme['linearGradientPurple']};
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
