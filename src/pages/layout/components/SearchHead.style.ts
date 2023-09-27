import styled from '@emotion/styled';

export const SearchHeadContainer = styled.div`
  width: 70%;
  ${({ theme }) => theme.style.flexAlignCenter}
  & > button {
    border: none;
    outline: none;
    padding: 0;
    background: none;
    margin-right: 7px;
  }
`;

export const PrevButtonContainer = styled.div`
  position: absolute;
  left: 20px;
  background-color: transparent;
  ${({ theme }) => theme.style.flexCenter};
`;

export const SearchForm = styled.form`
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  height: 40px;
  ${({ theme }) => theme.style.flexAlignCenter}
  padding: 0px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.color.greyLight};
  }
`;
