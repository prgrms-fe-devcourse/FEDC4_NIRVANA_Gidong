import { useState } from 'react';
import {
  ProfileEditContainer,
  ProfileEditForm,
  ProfileEditSection
} from './ProfileEdit.style';
import { UserInput } from '@components/UserInput';
import { USER_INPUT } from '@pages/signup/constants';
import { isNicknameOk } from '@pages/signup/validations';
import { Button } from '@components/Button';
import { putUpdateUser } from '@apis/user';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';

interface ProfileEditProps {
  refetch: () => void;
}

const ProfileEdit = ({ refetch }: ProfileEditProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

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

  const handleSubmitUsername = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const username = target.username.value;
    await putUpdateUser({
      fullName: username,
      token: userSessionData.token
    }).then(() => {
      refetch();
    });
  };

  return (
    <ProfileEditSection>
      <ProfileEditContainer>
        <ProfileEditForm onSubmit={handleSubmitUsername}>
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
