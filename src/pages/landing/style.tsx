import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme['linearGradientPurple']};
  display: flex;
  height: 100vh;
  min-height: 844px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  width: 221px;
  height: 41px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 120px;
  margin-bottom: 469px;
`;

export const LinkLayout = styled.div`
  & > a {
    display: block;
  }
  & > a + a {
    margin-top: 16px;
  }
  margin-bottom: 48px;
`;

export const PreviewLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
  & > span {
    color: ${({ theme }) => theme.white};
    margin-bottom: 6px;
  }

  & > a {
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  & > a > span {
    margin-left: 5px;
  }
`;

export const PreviewSpan = styled.span`
  font-size: 12px;
`;
