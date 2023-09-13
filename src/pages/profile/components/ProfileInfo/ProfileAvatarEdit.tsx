import { useFileUpload } from '@hooks/useFileUpload';
import { EditIconContainer } from './ProfileAvatarEdit.style';
import { Icon } from '@components/Icon';
import useUploadPhotoMutation from '@pages/profile/hooks/useUploadPhotoMutation';

const ProfileAvatarEdit = () => {
  const { fileInputRef, openFileInput } = useFileUpload();

  const uploadAvatarMutation = useUploadPhotoMutation({ isCover: false });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    uploadAvatarMutation.mutate(file);
  };
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
