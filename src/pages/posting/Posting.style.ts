import styled from '@emotion/styled';

export const StyledPosting = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.style.flexCenter}
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 550px;
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  color: ${({ theme }) => theme.color.white};
  height: 50px;
`;