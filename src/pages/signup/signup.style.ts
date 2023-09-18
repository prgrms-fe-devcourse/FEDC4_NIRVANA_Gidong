import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

export const LogoContainer = styled.div`
  margin-bottom: 80px;
`;

export const SignUpContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};

  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${logo});
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;

export const SignUpForm = styled.form`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  width: 325px;
  height: 485px;
  padding: 25px 20px;
  border: 1px solid purple;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  margin-top: 15px;
`;
