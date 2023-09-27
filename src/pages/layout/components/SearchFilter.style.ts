import styled from '@emotion/styled';

export const FilterButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  ${({ theme }) => theme.style.flexCenter}

  > button {
    margin: 0 5px;
  }
`;
