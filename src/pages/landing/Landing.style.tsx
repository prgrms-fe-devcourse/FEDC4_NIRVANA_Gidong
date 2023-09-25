import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeadingContentContainer = styled.div`
  width: 100%;
  height: 30%;
  max-height: 300px;
  min-height: 100px;
  ${({ theme }) => theme.style.flexAlignCenter};
`;

export const Heading = styled.h1`
  width: 230px;
  height: 45px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 50px auto;
`;

export const BottomContentContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  margin-bottom: 50px;
`;

export const LinkContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;

  > a {
    margin: 5px 0px;
  }
`;

export const PreviewLink = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
  margin-bottom: 20px;
  & > span {
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 2px;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 12px;
  }

  & > a {
    ${({ theme }) => theme.style.flexAlignCenter};
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    font-weight: bold;
    padding: 5px 0px;
    font-size: 12px;
  }

  & > a > span {
    margin-left: 3px;
  }
`;

export const PreviewSpan = styled.span`
  font-size: 12px;
`;
