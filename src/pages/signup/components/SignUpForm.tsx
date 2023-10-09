import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/Button';
import { FormInput } from '@components/FormInput';
import { isEmailOk, isNicknameOk, isPasswordOk } from '../validations';
import { USER_INPUT, BUTTON } from '../constants';
import { SignUpFormContainer, ButtonContainer } from './SignUpForm.style';
import { SignUpValidations } from '../validations';
import postSignUpUser from '@apis/signup';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@components/Alert';
import { MODAL } from '../constants';

const SignUpForm = () => {
  interface SignUpFormData {
    email: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
  }
  const [emailErrorCatched, setEmailErrorCatched] = useState<boolean>(false);
  const [signupSucceed, setSignupSucceed] = useState<boolean>(false);
  const methods = useForm<SignUpFormData>();
  const { watch } = methods;
  const [email, nickname, password, passwordConfirm] = watch([
    'email',
    'nickname',
    'password',
    'passwordConfirm'
  ]);

  const navigate = useNavigate();
  const onSubmit = () => {
    if (SignUpValidations({ email, nickname, password, passwordConfirm })) {
      postSignUpUser({
        email,
        password,
        fullName: nickname
      })
        .then(() => {
          setSignupSucceed(true);
        })
        .catch((error) => {
          console.log(error);
          setEmailErrorCatched(true);
        });
    }
    setEmailErrorCatched(false);
    return;
  };

  return (
    <>
      {emailErrorCatched && (
        <Alert
          emoji={MODAL.ERROR.EMOJI}
          content={MODAL.ERROR.CONTENT}
          buttonLabel={MODAL.ERROR.LABEL}
        />
      )}
      {signupSucceed && (
        <Alert
          emoji={MODAL.SUCCESS.EMOJI}
          content={MODAL.SUCCESS.CONTENT}
          buttonLabel={MODAL.SUCCESS.LABEL}
          nextPageLink='/login'
        />
      )}
      <FormProvider {...methods}>
        <SignUpFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput
            name={USER_INPUT.EMAIL.NAME}
            placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
            title={USER_INPUT.EMAIL.TITLE}
            errorMessage={USER_INPUT.EMAIL.ERROR_MESSAGE}
            successMessage={USER_INPUT.EMAIL.SUCCESS_MESSAGE}
            show={email && email.length > 0}
            success={isEmailOk(email)}
          />
          <FormInput
            name={USER_INPUT.NICKNAME.NAME}
            placeholder={USER_INPUT.NICKNAME.PLACE_HOLDER}
            title={USER_INPUT.NICKNAME.TITLE}
            errorMessage={USER_INPUT.NICKNAME.ERROR_MESSAGE}
            successMessage={USER_INPUT.NICKNAME.SUCCESS_MESSAGE}
            show={nickname && nickname.length > 0}
            success={nickname && isNicknameOk(nickname)}
          />
          <FormInput
            name={USER_INPUT.PASSWORD.NAME}
            type={USER_INPUT.PASSWORD.TYPE}
            placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
            title={USER_INPUT.PASSWORD.TITLE}
            errorMessage={USER_INPUT.PASSWORD.ERROR_MESSAGE}
            successMessage={USER_INPUT.PASSWORD.SUCCESS_MESSAGE}
            show={password && password.length > 0}
            success={password && isPasswordOk(password)}
          />
          <FormInput
            name={USER_INPUT.PASSWORD_CONFIRM.NAME}
            type={USER_INPUT.PASSWORD_CONFIRM.TYPE}
            placeholder={USER_INPUT.PASSWORD_CONFIRM.PLACE_HOLDER}
            title={USER_INPUT.PASSWORD_CONFIRM.TITLE}
            errorMessage={USER_INPUT.PASSWORD_CONFIRM.ERROR_MESSAGE}
            successMessage={USER_INPUT.PASSWORD_CONFIRM.SUCCESS_MESSAGE}
            show={passwordConfirm && passwordConfirm.length > 0}
            success={passwordConfirm && password === passwordConfirm}
          />
          <ButtonContainer>
            <Button
              type='button'
              label={BUTTON.LABEL.CANCEL}
              width={125}
              height={42}
              bold={false}
              dark={false}
              handleClick={() => navigate('/')}
            />
            <Button
              type='submit'
              label={BUTTON.LABEL.SIGNUP}
              width={125}
              height={42}
              bold={false}
              dark={true}
              handleClick={() => methods.handleSubmit(onSubmit)}
            />
          </ButtonContainer>
        </SignUpFormContainer>
      </FormProvider>
    </>
  );
};

export default SignUpForm;
