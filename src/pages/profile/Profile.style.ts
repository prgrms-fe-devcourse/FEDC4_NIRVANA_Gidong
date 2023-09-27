import styled from '@emotion/styled';

export const ProfilePage = styled.div`
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
  height: 150px;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  position: relative;
`;

export const ProfileBodyContainer = styled.section`
  width: 100%;
  height: calc(100% - 250px);
  padding: 0px 30px;

  @media (min-width: 600px) {
    height: calc(100% - 300px);
  }
`;
