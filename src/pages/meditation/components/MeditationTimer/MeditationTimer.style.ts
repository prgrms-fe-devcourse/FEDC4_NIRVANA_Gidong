import styled from '@emotion/styled';

const TimerContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.linearGradientPurpleVivid};
  margin-top: 100px;
`;

const TimerElement = styled.button`
  ${({ theme }) => theme.style.flexCenter};
  border: none;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #211730;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    filter: brightness(50%);
    transition: 0.3s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export { TimerContainer, TimerElement, IconContainer };
