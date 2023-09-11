import { ProfileTabItemContainer } from './ProfileTabItem.style';
import { useRecoilState } from 'recoil';
import { selectedTabIndexState } from '../../states/selectedTabIndex';
import { Post, Follow } from '@/types';

interface ProfileTabItemProps {
  title: string;
  index: number;
  data: Post[] | Follow[] | number[];
}

const ProfileTabItem = ({ title, index }: ProfileTabItemProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(
    selectedTabIndexState
  );
  return (
    <ProfileTabItemContainer
      selected={index === selectedTabIndex}
      onClick={() => setSelectedTabIndex(index)}>
      {title}
    </ProfileTabItemContainer>
  );
};

export default ProfileTabItem;