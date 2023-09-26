import styled from '@emotion/styled';

export const SearchResultContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: calc(100vh - 50px - 64px);
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;
  overflow: auto;
`;
