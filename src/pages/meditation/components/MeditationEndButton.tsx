import styled from '@emotion/styled';
import Button from '@components/Button';
import { atom, useRecoilState } from 'recoil';

const EndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const endButtonPushed = atom({
  key: 'endButtonPushed',
  default: false
});

const MeditationEndButton = () => {
  const [_, setPushed] = useRecoilState(endButtonPushed);
  return (
    <EndButtonContainer>
      <Button
        width={129}
        height={49}
        dark={true}
        bold={false}
        label={'명상 끝내기'}
        handleClick={() => {
          setPushed(true);
        }}
      />
    </EndButtonContainer>
  );
};

export default MeditationEndButton;
