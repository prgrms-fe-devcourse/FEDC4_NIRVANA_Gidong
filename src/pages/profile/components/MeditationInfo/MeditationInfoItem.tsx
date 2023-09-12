import {
  MeditationInfoItemContainer,
  MeditationInfoItemIconSection,
  MeditationInfoItemTitleSection
} from './MeditationInfoItem.style';

interface MeditationInfoItemProps {
  icon: string;
  children: React.ReactNode;
}

const MeditationInfoItem = ({ icon, children }: MeditationInfoItemProps) => {
  return (
    <MeditationInfoItemContainer>
      <MeditationInfoItemIconSection>{icon}</MeditationInfoItemIconSection>
      <MeditationInfoItemTitleSection>
        {children}
      </MeditationInfoItemTitleSection>
    </MeditationInfoItemContainer>
  );
};

export default MeditationInfoItem;
