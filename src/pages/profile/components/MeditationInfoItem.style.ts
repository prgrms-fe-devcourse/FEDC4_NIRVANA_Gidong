import styled from '@emotion/styled';

export const MeditationInfoItemSection = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  flex-direction: column;
  width: 100%;
  padding: 30px; 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white800};
  :last-child {
    border-bottom: none;
  }
`;

export const MeditationInfoItemIconContainer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  font-size: 50px;
  @media (min-width: 600px) {
    font-size: 70px;
  }
`;

export const MeditationInfoItemTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15px;
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

  @media (min-width: 600px) {
    font-size: 20px;
  }
`;
