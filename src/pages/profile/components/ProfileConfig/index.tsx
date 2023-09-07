import Button from '@/components/Button';
import { ProfileConfigButtonGroup, ProfileConfigContainer } from './styles';

const ProfileConfig = () => {
  return (
    <ProfileConfigContainer>
      <ProfileConfigButtonGroup>
        <Button
          width={30}
          height={30}
          dark={false}
          bold={true}
          label='DM'
          borderRadius={30}
        />
        <Button
          width={30}
          height={30}
          dark={false}
          bold={true}
          label='설정'
          borderRadius={30}
        />
        <Button
          width={68}
          height={30}
          dark={false}
          bold={true}
          label='수정하기'
          borderRadius={30}
        />
      </ProfileConfigButtonGroup>
    </ProfileConfigContainer>
  );
};

export default ProfileConfig;
