import {
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../../hooks/useCarousel';
import { useRecoilState } from 'recoil';
import { selectedTabIndexState } from '../../states/selectedTabIndex';
import { FollowUsers } from '../FollowUsers';

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
      <ProfileCarouselItem>
        <FollowUsers following={true}></FollowUsers>
      </ProfileCarouselItem>
      <ProfileCarouselItem>
        <FollowUsers following={false}></FollowUsers>
      </ProfileCarouselItem>
      <ProfileCarouselItem>4</ProfileCarouselItem>
    </ProfileCarouselContainer>
  );
};

export default ProfileCarousel;
