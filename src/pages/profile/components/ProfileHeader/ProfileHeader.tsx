import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import {
  ProfileHeaderButtonContainer,
  ProfileHeaderSection
} from './ProfileHeader.style';

const ProfileHeader = () => {
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
          borderRadius={30}>
          <Icon
            name='settings'
            size={20}
            color='greyLight'
          />
        </Button>
        <Button
          label='수정하기'
          width={68}
          height={30}
          bold={true}
          fontSize={12}
          borderRadius={30}
        />
      </ProfileHeaderButtonContainer>
    </ProfileHeaderSection>
  );
};

export default ProfileHeader;
