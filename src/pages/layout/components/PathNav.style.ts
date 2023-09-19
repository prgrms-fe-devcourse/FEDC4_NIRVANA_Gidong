import styled from '@emotion/styled';
import logo from '@assets/logo.svg';

export const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 109px;
  height: 17px;
`;

export const PathNavContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
`;
