import styled from '@emotion/styled';

export const StyledPosting = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.style.flexCenter }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 550px;
  ${({ theme }) => theme.style.flexJustifycenter };
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  height: 50px;
`;

export const StyledPassPosting = styled.div`
  height: 50px;
`;
