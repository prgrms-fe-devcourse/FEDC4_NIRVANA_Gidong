import styled from '@emotion/styled';

export const SignUpForm = styled.form`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 2;
  background-color: ${({ theme }) => theme.color.white};
  width: 80%;
  min-width: 300px;
  max-width: 450px;
  max-height: 600px;
  padding: 25px 20px;
  border-radius: 10px;
  margin-bottom: 50px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.black250};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  width: 100%;
  margin-top: 15px;

  & > button {
    margin: 0px 5px;
  }
`;
