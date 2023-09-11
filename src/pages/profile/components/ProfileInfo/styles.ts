import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 122px;
  height: 117px;
  top: -35px;
`;
export const ProfileAvatarContainer = styled.div`
  flex-grow: 1;
`;

export const ProfileInfoNameAndBadge = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  justify-content: space-between;
`;

export const ProfileEmailContainer = styled.div``;
