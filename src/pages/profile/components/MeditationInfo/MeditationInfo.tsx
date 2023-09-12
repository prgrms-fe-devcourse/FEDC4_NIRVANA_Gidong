import { MeditationInfoSection } from './MeditationInfo.style';
import MeditationInfoItem from './MeditationInfoItem';

interface MeditationInfoProps {
  totalMeditationCount: number;
  totalMeditationTime: number;
}

const MeditationInfo = ({
  totalMeditationCount,
  totalMeditationTime
}: MeditationInfoProps) => {
  return (
    <MeditationInfoSection>
      <MeditationInfoItem
        icon='🧘🏻'
        title={`혜성상회 님은 총 ${totalMeditationCount}번의 명상을 진행한 상태예요.`}
      />
      <MeditationInfoItem
        icon='⏰'
        title={`혜성상회 님은 총 ${totalMeditationTime}분의 명상을 하셨어요.`}
      />
    </MeditationInfoSection>
  );
};

export default MeditationInfo;
