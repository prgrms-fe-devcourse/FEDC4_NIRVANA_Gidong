import styled from '@emotion/styled';

export const SearchResultContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px - 64px);
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 100;
`;

export const SearchResult = styled.div`
  overflow: auto;
`;

export const SearchItem = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
  height: 80px;
  padding-left: 30px;
`;
