import styled from '@emotion/styled';

export const StyleNoSearchResults = styled.div`
  width: 100%;
  height: 200px;
  font-size: 16px;
  ${({ theme }) => theme.style.flexCenter};
  color: ${({ theme }) => theme.color.greyLight};
`;
