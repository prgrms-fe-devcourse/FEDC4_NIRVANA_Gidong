import styled from '@emotion/styled';

export const EtcNavContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}

  & > div {
    margin-right: 12px;
    :last-of-type {
      margin-right: 0;
    }
  }
`;
