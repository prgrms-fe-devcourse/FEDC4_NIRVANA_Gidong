import styled from '@emotion/styled';

export const HeaderSection = styled.header<{ search: boolean }>`
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.color.purpleDark};
  display: flex;
  ${({ search }) =>
    search
      ? `align-items : center;
      padding : 0 14px;`
      : `justify-content : space-between;
       padding: 0 18px;`};
`;
