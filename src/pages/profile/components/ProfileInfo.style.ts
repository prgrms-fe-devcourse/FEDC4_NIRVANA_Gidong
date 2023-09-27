import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  height: 100%;
`;
export const ProfileAvatarContainer = styled.div`
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-bottom: 20px;
`;

export const ProfileInfoNameAndBadge = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  margin-top: 10px;
  padding-top: 10px;
  position: relative;
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  > span {
    ${({ theme }) => theme.style.textEllipsis};
  }
`;
