import styled from '@emotion/styled';

export const SearchResult = styled.div`
  height: calc(100vh - 50px - 64px - 61px);
  overflow: auto;
`;

export const SearchItem = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
  padding : 0 26px;
  height: 80px;

  & > div {
    padding: 0 14px;
  }
`;
