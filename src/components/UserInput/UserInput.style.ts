import styled from '@emotion/styled';

export const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const SignUpInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 45px;
  padding-left: 10px;
  border: 0.5px solid #7e7e7e;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  margin: 10px 0;
`;

export const SignUpError = styled.span`
  color: ${({ theme }) => theme.color.redVivid};
  font-size: 10px;
  font-weight: 400;
  margin-left: 10px;
`;

export const SignUpSuccess = styled.span`
  color: ${({ theme }) => theme.color.greenVivid};
  font-size: 10px;
  font-weight: 400;
  margin-left: 10px;
`;
