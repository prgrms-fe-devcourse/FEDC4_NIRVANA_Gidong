import styled from '@emotion/styled';

export const StyledPosting = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.style.flexCenter}
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 550px;
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 20px;

  > p {
    font-size: 18px;
    margin-bottom: 20px;

    > b {
      font-weight: 700;
    }
  }
`;
