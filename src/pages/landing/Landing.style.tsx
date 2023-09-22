import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  ${({ theme }) => theme.style.flexAlignCenter};
  justify-content: center;
  height: 100vh;
  min-height: 844px;
  flex-direction: column;
`;

export const Heading = styled.h1`
  width: 216px;
  height: 45px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 101px;
  margin-bottom: 469px;
`;

export const LinkContainer = styled.div`
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
    margin-bottom: 2px;
    text-align: center;
    letter-spacing: 0.03rem;
  }

  & > a {
    ${({ theme }) => theme.style.flexAlignCenter};
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    font-weight: 700;
    padding: 4px 7px 4px 5px;
  }

  & > a > span {
    margin-left: 3px;
  }
`;

export const PreviewSpan = styled.span`
  font-size: 12px;
`;
