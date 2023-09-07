import styled from '@emotion/styled';

export const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 26px;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  position: relative;
`;

export const ProfileBackgroundContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme['purpleDarker']};
  position: relative;
  overflow: hidden;
`;
