import styled from '@emotion/styled';

export const HeaderSection = styled.header`
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.color.purpleDark};
  display: flex;
`;

export const HeaderNavSection = styled(HeaderSection)`
  justify-content: space-between;
  padding: 0 18px;
`;

export const HeaderSearchSection = styled(HeaderSection)`
  align-items: center;
  padding: 0 44px 0 14px;
`;
