import { useRecoilState } from 'recoil';

import { endButtonPushed } from './states';
import { MeditationPage } from './Meditation.style';
import { ThemePicker } from '@components/ThemePicker';
import { Confirm } from '@components/Confirm';
import { Button } from '@components/Button';
import { meditationChannelInfo } from './models/channelInfo';
import {
  MeditationLabel,
  MeditationTimer,
  MeditationTimeSetter
} from '@pages/meditation/components';

const Meditation = () => {
  const [confirmCaptured, setConfirmCaptured] = useRecoilState(endButtonPushed);
  return (
    <>
      <MeditationPage>
        <MeditationLabel />
        <MeditationTimer />
        <MeditationTimeSetter />
        <ThemePicker themeInfo={meditationChannelInfo} />
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
