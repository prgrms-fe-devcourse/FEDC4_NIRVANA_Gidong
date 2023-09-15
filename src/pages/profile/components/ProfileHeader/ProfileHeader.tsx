import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import {
  ProfileHeaderButtonContainer,
  ProfileHeaderSection
} from './ProfileHeader.style';
import { useSetRecoilState } from 'recoil';
import { editModeState } from '@pages/profile/states/editMode';

const ProfileHeader = () => {
  const setEditMode = useSetRecoilState(editModeState);

  const handleEditClick = () => {
    setEditMode(true);
  };
  return (
    <ProfileHeaderSection>
      <ProfileHeaderButtonContainer>
        <Button
          width={30}
          height={30}
          bold={true}
          borderRadius={30}>
          <Icon
            name='send'
            size={20}
            color='greyLight'
          />
        </Button>
        <Button
          width={30}
          height={30}
          bold={true}
          fontSize={12}
          borderRadius={30}
          handleClick={handleEditClick}>
          <Icon
            name='settings'
            size={20}
            color='greyLight'
          />
        </Button>
      </ProfileHeaderButtonContainer>
    </ProfileHeaderSection>
  );
};

export default ProfileHeader;
