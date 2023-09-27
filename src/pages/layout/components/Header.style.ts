import styled from '@emotion/styled';

export const HeaderSection = styled.header`
  width: 100%;
  height: 50px;
  position: relative;
  background-color: ${({ theme }) => theme.color.purpleDark};
  display: flex;
`;

export const HeaderNavSection = styled(HeaderSection)`
  justify-content: space-between;
  padding: 0 20px;
`;

export const HeaderSearchSection = styled(HeaderSection)`
  align-items: center;
  ${({ theme }) => theme.style.flexCenter};
`;
