import { ProfileTabItemContainer } from './ProfileTabItem.style';

import { Follow, Post } from '@/types';

interface ProfileTabItemProps {
  title: string;
  selected: boolean;
  data: Post[] | Follow[] | number[];
  onTabItemClick: () => void;
}

const ProfileTabItem = ({
  title,
  selected,
  onTabItemClick
}: ProfileTabItemProps) => {
  return (
    <ProfileTabItemContainer
      selected={selected}
      onClick={onTabItemClick}>
      {title}
    </ProfileTabItemContainer>
  );
};

export default ProfileTabItem;
