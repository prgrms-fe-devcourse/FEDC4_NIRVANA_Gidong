import {
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../../hooks/useCarousel';
import { useRecoilState } from 'recoil';
import { selectedTabIndexState } from '../../states/selectedTabIndex';

interface ProfileCarouselProps {
  totalIndex: number;
}

const ProfileCarousel = ({ totalIndex }: ProfileCarouselProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(
    selectedTabIndexState
  );
  const [carouselRef] = useCarousel(
    selectedTabIndex,
    setSelectedTabIndex,
    totalIndex
  );

  return (
    <ProfileCarouselContainer ref={carouselRef}>
      <ProfileCarouselItem>0</ProfileCarouselItem>
      <ProfileCarouselItem>1</ProfileCarouselItem>
      <ProfileCarouselItem>2</ProfileCarouselItem>
      <ProfileCarouselItem>3</ProfileCarouselItem>
    </ProfileCarouselContainer>
  );
};

export default ProfileCarousel;
