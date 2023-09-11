import styled from '@emotion/styled';
import Button from '@components/Button';

const EndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const MeditationEndButton = () => {
  return (
    <EndButtonContainer>
      <Button
        width={129}
        height={49}
        dark={true}
        bold={false}
        label={'명상 끝내기'}
      />
    </EndButtonContainer>
  );
};

export default MeditationEndButton;
