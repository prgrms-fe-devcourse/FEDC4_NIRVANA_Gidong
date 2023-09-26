import styled from '@emotion/styled';

export const ProfilePage = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding: 0 26px;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  position: relative;
`;

export const ProfileBodyContainer = styled.section`
  width: 100%;
  height: calc(100% - 100px);
  padding: 0 26px;
  position: relative;
`;
