import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

const Logo = styled.h1`
  width: 221px;
  height: 41px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 80px;
`;

const SignUpContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${logo});
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;

const SignUpForm = styled.form`
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

const ButtonContainer = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  margin-top: 15px;
`;

export { SignUpForm, ButtonContainer, SignUpContainer, Logo };
