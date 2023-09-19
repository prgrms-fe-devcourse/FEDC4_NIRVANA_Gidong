import styled from '@emotion/styled';

export const EctNavContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}

  & > div {
    margin-right: 15px;
  }
`;
