import styled from '@emotion/styled';

export const TimeSetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  color: ${({ theme }) => theme.color.white};
  font-size: 32px;
`;

export const TimeLabel = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  background: none;
  width: 120px;
  border: none;
  outline: none;
`;

export const TimeInput = styled.input`
  background: none;
  width: 70%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 32px;
  text-align: center;
`;

export const SetTimeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
