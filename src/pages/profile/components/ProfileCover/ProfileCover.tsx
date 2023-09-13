import { Button } from '@components/Button';
import {
  ProfileCoverImage,
  ProfileCoverImageContainer
} from './ProfileCover.style';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../../states/editMode';

interface ProfileBackgroundProps {
  src: string;
}

const ProfileCover = ({ src }: ProfileBackgroundProps) => {
  const editMode = useRecoilValue(editModeState);

  return (
    <ProfileCoverImageContainer src={src}>
      <ProfileCoverImage
        src={src}
        alt='coverImage'
      />
      {editMode && (
        <Button
          width={85}
          height={33}
          label='커버사진 변경'
          borderRadius={10}
          fontSize={11}
          dark={true}
        />
      )}
    </ProfileCoverImageContainer>
  );
};

export default ProfileCover;
