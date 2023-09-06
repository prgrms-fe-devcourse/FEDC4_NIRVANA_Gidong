import styled from '@emotion/styled';

const LogoContainer = styled.div`
  margin-bottom: 80px;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme['linearGradientPurple']};
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled.form`
  box-sizing: border-box;
  display: flex;
  background-color: ${({ theme }) => theme['white']};
  width: 325px;
  height: 485px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export { SignUpForm, ButtonContainer, SignUpContainer, LogoContainer };
