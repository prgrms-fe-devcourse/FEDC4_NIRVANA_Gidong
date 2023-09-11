import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  ${({ theme }) => theme.style.flexAlignCenter};
  display: flex;
  height: 100vh;
  min-height: 844px;
  flex-direction: column;
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
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
  margin-bottom: 26px;
  & > span {
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 6px;
  }

  & > a {
    ${({ theme }) => theme.style.flexAlignCenter};
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    font-weight: 700;
  }

  & > a > span {
    margin-left: 5px;
  }
`;

export const PreviewSpan = styled.span`
  font-size: 12px;
`;
