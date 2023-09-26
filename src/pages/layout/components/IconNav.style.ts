import styled from '@emotion/styled';

export const EtcNavContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}

  & > div + div {
    margin-left: 15px;
  }
`;
