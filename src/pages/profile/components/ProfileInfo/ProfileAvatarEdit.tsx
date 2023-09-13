import { useFileUpload } from '@hooks/useFileUpload';
import { EditIconContainer } from './ProfileAvatarEdit.style';
import { Icon } from '@components/Icon';
import { useSetRecoilState } from 'recoil';
import { isEditLoadingState } from '@pages/profile/states/editLoading';
import useUploadPhotoMutation from '@pages/profile/hooks/useUploadPhotoMutation';

const ProfileAvatarEdit = () => {
  const { fileInputRef, openFileInput } = useFileUpload();
  const setIsEditLoading = useSetRecoilState(isEditLoadingState);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    uploadAvatarMutation.mutate(file);
  };

  const handleMutate = () => {
    setIsEditLoading(true);
  };
  const handleSuccess = () => {
    setIsEditLoading(false);
  };
  const uploadAvatarMutation = useUploadPhotoMutation({
    isCover: false,
    handleMutate,
    handleSuccess
  });
  return (
    <>
      <EditIconContainer onClick={openFileInput}>
        <Icon
          name='edit_square'
          size={30}
          color='white'
        />
      </EditIconContainer>
      <input
        ref={fileInputRef}
        type='file'
        hidden
        onChange={(event) => handleFileChange(event)}
      />
    </>
  );
};

export default ProfileAvatarEdit;
