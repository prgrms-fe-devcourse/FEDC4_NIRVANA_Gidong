import styled from '@emotion/styled';

export const MeditationInfoItemContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  flex-direction: column;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyLight};
  :last-child {
    border-bottom: none;
  }
`;

export const MeditationInfoItemIconSection = styled.div`
  width: 100%;
  text-align: center;
  font-size: 70px;
`;

export const MeditationInfoItemTitleSection = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 10px;
`;
