import styled from '@emotion/styled';

export const MeditationInfoItemSection = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  flex-direction: column;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyLight};
  :last-child {
    border-bottom: none;
  }
`;

export const MeditationInfoItemIconContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 70px;
`;

export const MeditationInfoItemTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  p {
    > strong {
      font-weight: 700;
    }
    > b {
      font-size: 30px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.purpleVivid};
    }
  }
`;
