import { MeditationInfoSection } from './MeditationInfo.style';
import { MeditationInfoItem } from '@pages/profile/components';

interface MeditationInfoProps {
  data: number[];
  fullName: string;
}

const MeditationInfo = ({ data, fullName }: MeditationInfoProps) => {
  return (
    <MeditationInfoSection>
      <MeditationInfoItem icon='🧘🏻'>
        <p>
          <strong>{fullName}</strong> 님은 총 <b>{data[0]}</b>번의 명상을
          진행했어요.
        </p>
      </MeditationInfoItem>
      <MeditationInfoItem icon='⏰'>
        <p>
          <strong>{fullName}</strong> 님은 총 <b>{data[1]}</b>분의 명상을
          하셨어요.
        </p>
      </MeditationInfoItem>
    </MeditationInfoSection>
  );
};

export default MeditationInfo;
