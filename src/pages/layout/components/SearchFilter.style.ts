import styled from '@emotion/styled';

export const FilterButtonContainer = styled.div`
  padding: 15px 0 6px;
  ${({ theme }) => theme.style.flexJustifyCenter}
  & > button:nth-of-type(2) {
    margin-left: 13px;
  }
`;
