import { useRecoilState } from 'recoil';
import { MeditationPage } from './Meditation.style';
import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';
import {
  MeditationLabel,
  MeditationTimer,
  MeditationThemePicker,
  MeditationTimeSetter
} from '@pages/meditation/components';
import { endButtonPushed } from './states';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  return (
    <>
      <MeditationPage>
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        <MeditationThemePicker />
        {confirmCaptured && (
          <Confirm
            emoji={'🧘🏻'}
            content={'정말 명상을 끝내시겠어요?'}
            contentFontSize={18}
            nextPageLink={'/'}
            CancelButton={
              <Button
                width={120}
                height={50}
                bold={true}
                dark={false}
                label={'취소'}
                handleClick={() => setConfirmCaptured(false)}
              />
            }
            ConfirmButton={
              <Button
                width={120}
                height={50}
                bold={true}
                dark={true}
                label={'끝내기'}
              />
            }
          />
        )}
      </MeditationPage>
    </>
  );
};

export default Meditation;
