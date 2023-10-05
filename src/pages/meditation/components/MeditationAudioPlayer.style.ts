import styled from '@emotion/styled';

export const AudioPlayerContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: row;
  width: 100%;
  height: 80px;
  background: transparent;
  margin-top: 30px;
`;

export const AudioPlayerElement = styled.button`
  ${({ theme }) => theme.style.flexCenter};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #211730;
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;
