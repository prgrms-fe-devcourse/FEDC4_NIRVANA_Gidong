import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.white800};
  padding: 0 35px;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter};

  &:hover {
    background-color: ${({ theme }) => theme.color.white900};
  }
`;
