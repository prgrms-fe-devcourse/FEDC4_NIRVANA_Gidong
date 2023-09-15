import styled from '@emotion/styled';

export const FollowUserContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter}
  justify-content: space-between;
  padding: 0 14px;
  height: 80px;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.greyLight};

  & > button {
    display: inline-block;
    border-radius: 30px;
    font-size: 12px;
  }
`;
