import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

const LogoContainer = styled.div`
  margin-bottom: 80px;
`;

const Logo = styled.h1`
  width: 221px;
  height: 41px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 80px;
`;

const PasswordUpdateContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;

const PasswordUpdateForm = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  width: 330px;
  height: 390px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  width: 300px;
  margin-top: 15px;
`;

export {
  PasswordUpdateForm,
  ButtonContainer,
  PasswordUpdateContainer,
  LogoContainer,
  Logo
};
