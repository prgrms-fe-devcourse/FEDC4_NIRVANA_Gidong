import { useState } from 'react';
import {
  ProfileEditContainer,
  ProfileEditSection,
  ProfileEditForm
} from './ProfileEdit.style';
import { UserInput } from '@components/UserInput';
import { USER_INPUT } from '@pages/signup/constants';
import { isNicknameOk } from '@pages/signup/validations';
import { Button } from '@components/Button';
import { putUpdateUser } from '@apis/user';

// import { useRecoilValue } from 'recoil';
// import { userState } from '@/states/userState';

const ProfileEdit = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  // const user = useRecoilValue(userState);
  const user = {
    token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NDM5MzE1fQ.heYeAayvX78n0NooS-7H4HlbeHCvquXdFl7tRIVkEHM'
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    if (isNicknameOk(value)) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    if (value === '') {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const username = target.username.value;
    await putUpdateUser({
      username,
      token: user.token
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <ProfileEditSection>
      <ProfileEditContainer>
        <ProfileEditForm onSubmit={handleSubmit}>
          <UserInput
            name={'username'}
            placeholder={'수정할 닉네임을 입력해주세요'}
            title={`${USER_INPUT.NICKNAME.TITLE} 수정`}
            success={success}
            errorMessage={USER_INPUT.NICKNAME.ERROR_MESSAGE}
            successMessage={USER_INPUT.NICKNAME.SUCCESS_MESSAGE}
            handleChange={handleChange}
            show={show}
          />
          <Button
            width={64}
            height={25}
            dark={true}
            label='저장'
            fontSize={12}
            bold={true}
          />
        </ProfileEditForm>
      </ProfileEditContainer>
    </ProfileEditSection>
  );
};

export default ProfileEdit;
