import { Button } from '@components/Button';
import { useFileUpload } from '@hooks/useFileUpload';
import {
  ProfileCoverImage,
  ProfileCoverImageContainer
} from './ProfileCover.style';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../../states/editMode';
import useUploadPhotoMutation from '@pages/profile/hooks/useUploadPhotoMutation';

interface ProfileBackgroundProps {
  src: string;
}

const ProfileCover = ({ src }: ProfileBackgroundProps) => {
  const editMode = useRecoilValue(editModeState);
  const { fileInputRef, openFileInput } = useFileUpload();
  const uploadCoverMutation = useUploadPhotoMutation({ isCover: true });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    uploadCoverMutation.mutate(file);
  };

  return (
    <ProfileCoverImageContainer src={src}>
      <ProfileCoverImage
        src={src}
        alt='coverImage'
      />
      {editMode && (
        <>
          <Button
            width={85}
            height={33}
            label='커버사진 변경'
            borderRadius={10}
            fontSize={11}
            dark={true}
            handleClick={openFileInput}
          />
          <input
            ref={fileInputRef}
            type='file'
            hidden
            onChange={(event) => handleFileChange(event)}
          />
        </>
      )}
    </ProfileCoverImageContainer>
  );
};

export default ProfileCover;
