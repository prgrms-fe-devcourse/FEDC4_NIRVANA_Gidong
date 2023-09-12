import {
  MeditationInfoItemContainer,
  MeditationInfoItemIconSection,
  MeditationInfoItemTitleSection
} from './MeditationInfoItem.style';

interface MeditationInfoItemProps {
  icon: string;
  title: string;
}

const MeditationInfoItem = ({ icon, title }: MeditationInfoItemProps) => {
  return (
    <MeditationInfoItemContainer>
      <MeditationInfoItemIconSection>{icon}</MeditationInfoItemIconSection>
      <MeditationInfoItemTitleSection>{title}</MeditationInfoItemTitleSection>
    </MeditationInfoItemContainer>
  );
};

export default MeditationInfoItem;
