import styled from '@emotion/styled';

export const SearchHeadContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
  & > button {
    border: none;
    outline: none;
    padding: 0;
    background: none;
    margin-right: 7px;
  }
`;

export const SearchBox = styled.div`
  width: 300px;
  height: 35px;
  ${({ theme }) => theme.style.flexAlignCenter}
  padding-left: 18px;
  padding-right: 11px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;
export const SearchInput = styled.input`
  border: 0;
  outline: none;
  font-size: 14px;
  flex-shrink: 0;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.color.greyLight};
  }
`;
