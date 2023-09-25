import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

export const LoginContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${logo});
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;

export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  box-sizing: border-box;
  width: 80%;
  height: 60%;
  min-width: 250px;
  max-width: 450px;
  min-height: 300px;
  max-height: 400px;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.black250};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
`;
