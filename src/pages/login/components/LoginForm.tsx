import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import postLogInUser from '@apis/login';
import { Button } from '@components/Button';
import { FormInput } from '@components/FormInput';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';
import { USER_INPUT, LABEL } from '../constants';
import { GoToSignUp } from '../components';
import { LoginFormContainer, ButtonContainer } from './LoginForm.style';

const LoginForm = () => {
  const methods = useForm();
  const { watch } = methods;
  const [email, password] = watch(['email', 'password']);
  const [errorCatched, setErrorCatched] = useState<boolean>(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectTo = search.replace('?redirect=', '');

  const [userSessionData, setUserSessionData] = useSessionStorage<
    Pick<User, '_id' | 'token' | 'image' | 'fullName'>
  >('userData', {
    _id: '',
    token: '',
    image: '',
    fullName: ''
  });

  useEffect(() => {
    if (userSessionData.token) {
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate('/meditation');
      }
    }
  }, [userSessionData.token, navigate, redirectTo, search]);

  const onSubmit = () => {
    postLogInUser({ email, password })
      .then((res) => {
        const { user, token } = res.data;
        setUserSessionData({
          _id: user._id,
          token,
          image: user.image,
          fullName: user.fullName
        });
      })
      .catch(() => {
        setErrorCatched(true);
      });
  };

  return (
    <FormProvider {...methods}>
      <LoginFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput
          name={USER_INPUT.EMAIL.NAME}
          placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
          title={USER_INPUT.EMAIL.TITLE}
          show={errorCatched}
          errorMessage={USER_INPUT.ERROR_MESSAGE}
        />
        <FormInput
          name={USER_INPUT.PASSWORD.NAME}
          placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD.TITLE}
          type={USER_INPUT.PASSWORD.TYPE}
        />
        <ButtonContainer>
          <Button
            label={LABEL.LOG_IN}
            width={300}
            height={45}
            bold={false}
            dark={true}
            handleClick={() => methods.handleSubmit(onSubmit)}
          />
        </ButtonContainer>
        <GoToSignUp />
      </LoginFormContainer>
    </FormProvider>
  );
};

export default LoginForm;
