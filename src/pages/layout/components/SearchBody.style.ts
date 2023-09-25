import styled from '@emotion/styled';

export const SearchResultContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: calc(100vh - 50px - 64px);
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;
`;

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
