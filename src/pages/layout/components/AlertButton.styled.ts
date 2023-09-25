import styled from '@emotion/styled';

export const AlertContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter};

  &:hover {
    background-color: ${({ theme }) => theme.color.black250};
  }
`;
