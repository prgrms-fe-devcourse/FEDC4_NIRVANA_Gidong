import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

export const HeaderContainer = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.purpleDark};
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

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 15px;
  }
`;
