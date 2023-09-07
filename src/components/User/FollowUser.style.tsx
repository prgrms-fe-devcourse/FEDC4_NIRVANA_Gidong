import styled from '@emotion/styled';

export const UserItem = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNickName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
  margin-left: 15px;
  margin-right: 2px;
`;
export const UserId = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.greyLight};
`;
