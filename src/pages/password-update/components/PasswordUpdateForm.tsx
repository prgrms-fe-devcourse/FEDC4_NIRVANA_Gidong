import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import putUpdatePassword from '@apis/password';
import { Alert } from '@components/Alert';
import { Button } from '@components/Button';
import { FormInput } from '@components/FormInput';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';
import { LABEL, PASSWORD_HINT, USER_INPUT, ALERT } from '../constants';
import { PasswordHint } from '@pages/password-update/components';
import {
  PasswordUpdateFormContainer,
  ButtonContainer
} from './PasswordUpdateForm.style';
import isPasswordOk from '../utils/isPasswordOk';

interface PasswordUpdateFormData {
  password: string;
  passwordConfirm: string;
}

const PasswordUpdateForm = () => {
  const [passwordChanged, setPasswordChanged] = useState<boolean>(false);
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const methods = useForm<PasswordUpdateFormData>();
  const { watch } = methods;
  const [password, passwordConfirm] = watch(['password', 'passwordConfirm']);

  const onSubmit = () => {
    if (isPasswordOk(password) && password === passwordConfirm) {
      putUpdatePassword({ password, token: `Bearer ${userSessionData.token}` })
        .then(() => setPasswordChanged(true))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {passwordChanged && (
        <Alert
          emoji={ALERT.EMOJI}
          content={ALERT.CONTENT}
          buttonLabel={ALERT.BUTTON_LABEL}
          nextPageLink={
            userSessionData.token ? `/profile/${userSessionData._id}` : '/login'
          }
        />
      )}
      <FormProvider {...methods}>
        <PasswordUpdateFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <PasswordHint text={PASSWORD_HINT} />
          <FormInput
            name={USER_INPUT.NEW_PASSWORD.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD.TITLE}
            show={password && password.length > 0}
            success={password && isPasswordOk(password)}
            type={USER_INPUT.NEW_PASSWORD.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD.SUCCESS_MESSAGE}
          />
          <FormInput
            name={USER_INPUT.NEW_PASSWORD_CONFIRM.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD_CONFIRM.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD_CONFIRM.TITLE}
            show={password && passwordConfirm.length > 0}
            success={passwordConfirm && password === passwordConfirm}
            type={USER_INPUT.NEW_PASSWORD_CONFIRM.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.SUCCESS_MESSAGE}
          />
          <ButtonContainer>
            <Button
              label={LABEL.CHANGE_PASSWORD}
              width={300}
              height={45}
              bold={false}
              dark={true}
              handleClick={() => methods.handleSubmit(onSubmit)}
            />
          </ButtonContainer>
        </PasswordUpdateFormContainer>
      </FormProvider>
    </>
  );
};

export default PasswordUpdateForm;
