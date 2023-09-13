import { Button } from '@components/Button';
import { useFileUpload } from '@hooks/useFileUpload';
import {
  ProfileCoverImage,
  ProfileCoverImageContainer
} from './ProfileCover.style';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../../states/editMode';
import useUploadPhotoMutation from '@pages/profile/hooks/useUploadPhotoMutation';
import { Spinner } from '@components/Loader';
import { useRecoilState } from 'recoil';
import { isEditLoadingState } from '@pages/profile/states/editLoading';

interface ProfileBackgroundProps {
  src: string;
}

const ProfileCover = ({ src }: ProfileBackgroundProps) => {
  const [isEditLoading, setIsEditLoading] = useRecoilState(isEditLoadingState);
  const editMode = useRecoilValue(editModeState);
  const { fileInputRef, openFileInput } = useFileUpload();
  const handleMutate = () => {
    setIsEditLoading(true);
  };
  const handleSuccess = () => {
    setIsEditLoading(false);
  };
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    uploadCoverMutation.mutate(file);
  };

  const uploadCoverMutation = useUploadPhotoMutation({
    isCover: false,
    handleMutate,
    handleSuccess
  });

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
          <Spinner isLoading={isEditLoading} />
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
