import styled from '@emotion/styled';

export const StyledSkipPosting = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  min-height: 40px;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
`;
