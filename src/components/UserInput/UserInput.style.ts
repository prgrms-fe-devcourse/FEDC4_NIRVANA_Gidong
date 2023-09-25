import styled from '@emotion/styled';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.white500};
  border-radius: 10px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.redVivid};
  font-size: 12px;
  font-weight: 400;
  margin-left: 10px;
  white-space: pre-line;
`;

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.color.greenVivid};
  font-size: 10px;
  font-weight: 400;
  margin-left: 10px;
`;
