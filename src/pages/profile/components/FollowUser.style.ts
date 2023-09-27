import styled from '@emotion/styled';

export const FollowUserContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
  justify-content: space-between;
  padding: 0 14px;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white800};
  &:active {
    background-color: ${({ theme }) => theme.color.white900};
  }
`;
