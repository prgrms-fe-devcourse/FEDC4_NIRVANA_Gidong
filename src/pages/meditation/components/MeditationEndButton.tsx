import styled from '@emotion/styled';
import { Button } from '@components/Button';
import { atom, useSetRecoilState } from 'recoil';

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
  const setPushed = useSetRecoilState(endButtonPushed);
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
