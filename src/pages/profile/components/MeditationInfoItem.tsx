import {
  MeditationInfoItemIconContainer,
  MeditationInfoItemSection,
  MeditationInfoItemTitleContainer
} from './MeditationInfoItem.style';

interface MeditationInfoItemProps {
  icon: string;
  children: React.ReactNode;
}

const MeditationInfoItem = ({ icon, children }: MeditationInfoItemProps) => {
  return (
    <MeditationInfoItemSection>
      <MeditationInfoItemIconContainer>{icon}</MeditationInfoItemIconContainer>
      <MeditationInfoItemTitleContainer>
        {children}
      </MeditationInfoItemTitleContainer>
    </MeditationInfoItemSection>
  );
};

export default MeditationInfoItem;
