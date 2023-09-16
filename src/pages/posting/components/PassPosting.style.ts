import styled from '@emotion/styled';

export const StyledPassPosting = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.style.flexCenter};
  height: 50px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
`;
