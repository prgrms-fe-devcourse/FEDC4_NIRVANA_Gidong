import { useSetRecoilState } from 'recoil';
import { Button } from '@components/Button';
import { EndButtonContainer } from './MeditationEndButton.style';
import { endButtonPushed } from '../states';

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
