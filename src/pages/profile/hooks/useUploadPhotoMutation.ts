import { postUploadPhoto } from '@apis/user';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/userState';

interface UseUploadPhotoMutationParams {
  isCover: boolean;
  handleMutate: () => void;
  handleSuccess: () => void;
}

const useUploadPhotoMutation = ({
  isCover,
  handleMutate,
  handleSuccess
}: UseUploadPhotoMutationParams) => {
  const user = useRecoilValue(userState);
  // const token = 'Bearer ' + user.token;
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NDM5MzE1fQ.heYeAayvX78n0NooS-7H4HlbeHCvquXdFl7tRIVkEHM';
  const uploadMutation = useMutation(
    (file: File) => postUploadPhoto(file, token, isCover),
    {
      onMutate: (file: File) => {
        console.log('Uploading avatar...', file);
        handleMutate();
      },
      onSuccess: (data) => {
        console.log('Upload avatar success!', data);
        handleSuccess();
      }
    }
  );
  return uploadMutation;
};

export default useUploadPhotoMutation;
