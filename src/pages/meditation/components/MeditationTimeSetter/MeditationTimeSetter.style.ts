import styled from '@emotion/styled';

const TimeSetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  color: ${({ theme }) => theme.color.white};
  font-size: 32px;
`;

const TimeLabel = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  background: none;
  width: 120px;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
`;

const SetTimeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export { TimeSetterContainer, TimeLabel, SetTimeButton };
