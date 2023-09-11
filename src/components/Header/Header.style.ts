import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

export const HeaderContainer = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.color.purpleDark};
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
`;

export const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 109px;
  height: 17px;
`;

export const LeftLayout = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
`;
export const RightLayout = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}

  & > div {
    margin-right: 15px;
  }
`;
